import React, { useState } from "react";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [cTime, setCTime] = useState(newTime);
  let updateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCTime(newTime);
  };

  return (
    <>
      <div className="inc">
        <h1>{cTime}</h1>
        <button onClick={updateTime}>Get Time</button>
      </div>
    </>
  );
};

export default App;
