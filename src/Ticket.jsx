import { TicketNum } from "./TicketNum";
import "./Ticket.css"

export function Ticket({ticket}){
    console.log(ticket)
    return(
        <div className="ticket">
            <p>Ticket</p>
            {ticket.map((val,idx)=>(
                <TicketNum num={val} key={idx}/>
            ))}
        </div>
    )
}