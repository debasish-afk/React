import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <input
              type="text"
              placeholder="Enter your firstname"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter your lastname"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <button type="submit">Submit Me</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
