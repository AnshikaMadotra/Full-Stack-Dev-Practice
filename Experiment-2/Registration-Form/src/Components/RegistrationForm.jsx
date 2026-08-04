import React, { useState } from "react";
import SubmittedData from "./SubmittedData";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      name,
      email,
      message,
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br /><br />

          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br /><br />

          <label>Message: </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <br /><br />

          <button type="submit">Submit</button>
        </div>
      </form>

      <SubmittedData data={submittedData} />
    </>
  );
};

export default RegistrationForm;