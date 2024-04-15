import { useEffect, useState } from "react";

export default function Count() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  let increasex = () => {
    setCountx((countx += 1));
  };
  let increasey = () => {
    setCounty((county += 1));
  };
  useEffect(() => {
    console.log("This is a side effect");
  },[]);
  return (
    <div>
      <h1>countx</h1>
      <p>countx={countx}</p>
      <button onClick={increasex}>+1</button>
      <br />
      <br />
      <h1>county</h1>
      <p>county={county}</p>
      <button onClick={increasey}>+1</button>
    </div>
  );
}
