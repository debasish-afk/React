import { useState } from "react";

export default function Ludo() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });
  let [arr, setArr] = useState([]);
  let updateBlue = () => {
    // setMoves((prevValue) => {
    //   return { ...prevValue, blue: prevValue.blue + 1 };
    // });
    setArr((prevArr)=>{
        return [...arr," newValue"]
    })
  };
  let updateYellow = () => {
    setMoves((prevValue) => {
      return { ...prevValue, yellow: prevValue.yellow + 1 };
    });
  };
  let updateRed = () => {
    setMoves((prevValue) => {
      return { ...prevValue, blue: prevValue.blue + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((prevValue) => {
      return { ...prevValue, blue: prevValue.blue + 1 };
    });
  };
  return (
    <div>
      <p>Game begins!</p>
      <p>{arr}</p>
      <div>
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
      </div>
    </div>
  );
}
