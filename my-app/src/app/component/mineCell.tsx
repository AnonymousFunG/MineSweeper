import { Cell } from './mineBoard'

const MineCell = ({ cell, onClick}: {cell:Cell, onClick: ()=>void}) => {

    // const [clicked,setClicked]=useState(0)

    // const handleClick =()=>{
    //     cell.isRevealed = true
    //     setClicked(clicked+1)
    //     console.log(cell)
    // }

    return (
        <>
            <div style={{
                backgroundColor: cell.isRevealed? (cell.isMine? "red":"green"): "#eee", 
                width: "40px",
                height: "40px",
                border: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"}}
                onClick={onClick}>
                {cell.isRevealed ? (cell.isMine ? '💣' : cell.neighborCount || '') : ''}
                </div>
        </>
    )

}

export default MineCell