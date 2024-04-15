import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ludo from './Ludo'
import ToDo from './ToDo'
import { Lottery } from './Lottery'
import { calculateNo } from './helper'

function App() {
  let winningCondition = (ticket)=>{
    return calculateNo(ticket) == 15
  }

  return (
    <>
    <Lottery n={3} winningCondition={winningCondition}/>
    </>
  )
}

export default App
