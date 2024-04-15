import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password:""
  });

  let handleFormData = (event) => {
    setFormData((currData) => {
      // currData[event.target.name]=event.target.value;
      return {
        ...currData,
        [event.target.name]:event.target.value
      }
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    setFormData({
      fullName: "",
      userName: "",
      password:""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">fullName</label>
      <input
        placeholder="Enter your name"
        type="text"
        value={formData.fullName}
        onChange={handleFormData}
        id="fullName"
        name="fullName"
      />
      <label htmlFor="userName">userName</label>
      <input
        placeholder="Enter your userName"
        type="text"
        value={formData.userName}
        onChange={handleFormData}
        id="userName"
        name="userName"
      />
      <label htmlFor="password">password</label>
      <input
        placeholder="Enter your password"
        type="password"
        value={formData.password}
        onChange={handleFormData}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </form>
  );
}
