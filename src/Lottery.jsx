import { useState } from "react";
import "./Lottery.css";
import { calculateNo, getRandomNo } from "./helper";
import { Ticket } from "./Ticket";
import { Button } from "./Button";

export function Lottery({n = 3,winningCondition}) {
  let [ticket, setTicket] = useState(getRandomNo(n));

  let isWinning = winningCondition(ticket);

  let upNumbers = () => {
    setTicket(() => {
      return getRandomNo(n);
    });
  };
  console.log("lottery",ticket)
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <Button action={upNumbers} text={"Buy new ticket"}/>
      <h2>{isWinning && "Congratulation, you won!"}</h2>
    </div>
  );
}
