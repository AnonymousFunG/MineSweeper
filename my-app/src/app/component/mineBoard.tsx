import React from "react";
import MineCell from "./mineCell"
import { useState } from "react";

export interface Cell {
    isMine: boolean,
    isRevealed: boolean,
    neighborCount: number,
    // isFlagged: boolean
}


const MineBoard = ({ difficulties, mines }: { difficulties: number, mines: number })=> {

    const board: Cell[][] = []
    const [clicked,setClicked]=useState(0)
    let plannedMines = 0

    for (let i = 0; i < difficulties; i++) {
        board.push([]);
        for (let j = 0; j < difficulties; j++) {
            const cell: Cell = {
                isMine: false,
                isRevealed: false,
                neighborCount: 0,
            };
            board[i].push(cell);
        }
    }

    while (plannedMines < mines) {
        const row = Math.floor(Math.random() * difficulties);
        const col = Math.floor(Math.random() * difficulties);
        if (!board[row][col].isMine) {
            board[row][col].isMine = true;
            plannedMines++;
        }
    }

    // for (let z = 0; z < difficulties; z++) {
    //     for (let r = 0; r < difficulties; r++) {
    //         if (board[z][r].isMine == false) {
    //             if (z == 0) {
    //                 if (r == 0) {
    //                     if (board[z + 1][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                 }
    //                 if (r > 0 && r < difficulties - 1) {
    //                     if (board[z][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                 }
    //                 if (r == difficulties - 1) {
    //                     if (board[z][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                 }
    //             }
    //             if (z > 0 && z < difficulties - 1) {
    //                 if (r == 0) {
    //                     if (board[z - 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z - 1][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                 }
    //                 if (r > 0 && r < difficulties - 1) {
    //                     if (board[z - 1][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z - 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z - 1][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                 }
    //                 if (r == difficulties - 1) {
    //                     if (board[z - 1][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z - 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z + 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                 }
    //             }
    //             if (z == difficulties - 1) {
    //                 if (r == 0) {
    //                     if (board[z - 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z - 1][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                 }
    //                 if (r > 0 && r < difficulties - 1) {
    //                     if (board[z - 1][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z - 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z - 1][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z][r + 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                 }
    //                 if (r == difficulties - 1) {
    //                     if (board[z - 1][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z - 1][r].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                     if (board[z][r - 1].isMine == true) {
    //                         board[z][r].neighborCount++
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let z = 0; z < difficulties; z++) {
        for (let r = 0; r < difficulties; r++) {
            if (!board[z][r].isMine) {
                let count = 0;
                directions.forEach(([dx, dy]) => {
                    const newRow = z + dx;
                    const newCol = r + dy;
                    if (newRow >= 0 && newRow < difficulties && newCol >= 0 && newCol < difficulties) {
                        if (board[newRow][newCol].isMine) count++;
                    }
                });
                board[z][r].neighborCount = count;
            }
        }
    }
    // console.log(board)
    // console.log(board.map((row:Cell[], rowIndex:number) =>{
    //     return row.map((cell:Cell, columnIndex)=>{
    //         <MineCell cell={cell}></MineCell>
    //     })))

    // function handleClick(rowIndex:number,columnIndex:number){
    //     if (rowIndex < 0 || columnIndex < 0 || rowIndex >= difficulties || columnIndex >= difficulties) {
    //         return;
    //     }
    //     if (board[rowIndex][columnIndex].isRevealed || board[rowIndex][columnIndex].isMine) {
    //         return;
    //     }
    //     board[rowIndex][columnIndex].isRevealed = true

    //     if (board[rowIndex][columnIndex].neighborCount === 0) {
    //         for (let x = -1; x <= 1; x++) {
    //             for (let y = -1; y <= 1; y++) {
    //                 if (x === 0 && y === 0) continue;
    //                 handleClick(rowIndex + x, columnIndex + y);
    //             }
    //         }
    //     }
        // setClicked(clicked+1)
    // }

    return (
        <>
            {board.map((row:Cell[], rowIndex:number) =>{
                return row.map((cell:Cell, columnIndex)=>{
                    return <MineCell 
                                key={`${rowIndex}-${columnIndex}`}
                                // onClick={handleClick(rowIndex,columnIndex)}
                                cell={cell}></MineCell>
                })
            })}
        </>
    )
}

export default MineBoard
