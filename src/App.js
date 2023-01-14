import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    gmail: "",
    phone: "",
  });

  const inputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const {value,name}=event.target

    setFullName((preValue) => {
      return {
        ...preValue,
        [name]:value
      }
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     gmail: preValue.gmail,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     gmail: preValue.gmail,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "gmail") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     gmail: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     gmail: preValue.gmail,
      //     phone: value,
      //   };
      // }
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
              Hello {fullName.fname} {fullName.lname} {fullName.gmail} {fullName.phone}
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
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter your Gmail"
              name="gmail"
              onChange={inputEvent}
              value={fullName.gmail}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="Enter your Phone No."
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <br />
            <br />
            <button type="submit">Submit Me</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
