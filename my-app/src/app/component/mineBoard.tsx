import React from "react";
import MineCell from "./mineCell"
import { useState, useEffect } from "react";

export interface Cell {
    isMine: boolean,
    isRevealed: boolean,
    neighborCount: number,
    // isFlagged: boolean
}

const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
];


const MineBoard = ({ difficulties, mines }: { difficulties: number, mines: number }) => {

    const [board, setBoard] = useState<Cell[][]>([])

    useEffect(() => {
        const newBoard: Cell[][] = []
        let plannedMines = 0

        for (let i = 0; i < difficulties; i++) {
            newBoard.push([]);
            for (let j = 0; j < difficulties; j++) {
                const cell: Cell = {
                    isMine: false,
                    isRevealed: false,
                    neighborCount: 0,
                };
                newBoard[i].push(cell);
            }
        }

        while (plannedMines < mines) {
            const row = Math.floor(Math.random() * difficulties);
            const col = Math.floor(Math.random() * difficulties);
            if (!newBoard[row][col].isMine) {
                newBoard[row][col].isMine = true;
                plannedMines++;
            }
        }

        for (let z = 0; z < difficulties; z++) {
            for (let r = 0; r < difficulties; r++) {
                if (!newBoard[z][r].isMine) {
                    let count = 0;
                    directions.forEach(([dx, dy]) => {
                        const newRow = z + dx;
                        const newCol = r + dy;
                        if (newRow >= 0 && newRow < difficulties && newCol >= 0 && newCol < difficulties) {
                            if (newBoard[newRow][newCol].isMine) count++;
                        }
                    });
                    newBoard[z][r].neighborCount = count;
                }
            }
        }

        setBoard(newBoard)

    }, [difficulties, mines])

    function reveal(oldBoard:Cell[][], rowIndex:number, columnIndex:number){

        if (rowIndex<0 || columnIndex<0 || rowIndex >= difficulties || columnIndex >= difficulties){
            return oldBoard
        }

        const cell = oldBoard[rowIndex][columnIndex]

        if (cell.isRevealed){
            return oldBoard
        }
        
        cell.isRevealed=true

        if (cell.neighborCount == 0 && !cell.isMine){
            for (const direction of directions){
                reveal(oldBoard, rowIndex + direction[0], columnIndex + direction[1])
            }
        }

        return oldBoard
    }

    return (
        <>
            {board.map((row: Cell[], rowIndex: number) => {
                return row.map((cell: Cell, columnIndex) => {
                    return <MineCell
                        key={`${rowIndex}-${columnIndex}`}
                        onClick={()=>{
                            setBoard(oldBoard=>{
                                const revealedBoard = reveal(oldBoard, rowIndex, columnIndex)
                                return [...revealedBoard]
                            })
                        }}
                        cell={cell}></MineCell>
                })
            })}
        </>
    )
}

export default MineBoard
