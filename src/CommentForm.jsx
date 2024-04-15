import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    userName: "",
    remarks: "",
    ratings: "",
  });
  let handleFormData = (event) => {
    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]: event.target.value,
      };
    });
  };
  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      userName: "",
      remarks: "",
      ratings: "",
    });
  };
  return (
    <div>
      <h1>give a comment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">userName</label>
        <input
          placeholder="enter your username"
          type="text"
          name="userName"
          id="userName"
          value={formData.userName}
          onChange={handleFormData}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          placeholder="remarks"
          name="remarks"
          id="remarks"
          value={formData.remarks}
          onChange={handleFormData}
        />
        <br />
        <br />
        <label htmlFor="ratings">ratings</label>
        <input
          placeholder="ratings"
          name="ratings"
          id="ratings"
          type="number"
          value={formData.ratings}
          onChange={handleFormData}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
