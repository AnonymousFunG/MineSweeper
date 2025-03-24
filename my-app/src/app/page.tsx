"use client"
import { useState } from "react";
import MineBoard from "./component/mineBoard";

export default function Home() {

  const [difficulties, setDifficulties] = useState(10)
  const [mine, setMine] = useState(10)

  const handleMinusDifficulties = () => {
    if (difficulties > 0 && ((difficulties - 1) * (difficulties - 1) > mine)) {
      setDifficulties(difficulties - 1)
    }
  }

  const handleAddDifficulties = () => {
    setDifficulties(difficulties + 1)
  }

  const handleAddMines = () => {
    setMine(mine + 1)
  }

  const handleMinusMines = () => {
    setMine(mine - 1)
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <div style={{
          fontFamily: "fantasy",
          fontSize: "50px",
          fontWeight: "bold",
          color: "brown"
        }}> MineSweeper</div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <div>Difficulties:</div>
          <div>{difficulties}</div>
          <button onClick={handleMinusDifficulties}>-</button>
          <button onClick={handleAddDifficulties}>+</button>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <div>Mines:</div>
          <div>{mine}</div>
          <button onClick={handleMinusMines}>-</button>
          <button onClick={handleAddMines}>+</button>
        </div>
        <div style={{overflowX:"auto", maxWidth:"100%"}}>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${difficulties}, 1fr)`, gridTemplateRows: `repeat(${difficulties}, 1fr)` }}>
            <MineBoard difficulties={difficulties} mines={mine}></MineBoard>
          </div>
        </div>
      </div>
    </>
  );
}
