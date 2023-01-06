import React, { useState } from "react";

const App = () => {
  const purple="#9b59b6"
  const [bg,setBg]=useState(purple)
  const [name,setName]=useState("Click Me")
  const bgChange=()=>{
    let newBg="#f1c40f"
    setBg(newBg)
    setName("Clicked ✅")
  }
  const bgBack=()=>{
    let lightYel="#F8EFBA"
    setBg(lightYel)
    setName("what nonsense😠")
  }
   return (
    <>
      <div style={{backgroundColor:bg}}>
        <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
      </div>
    </>
   )
  
};

export default App;
