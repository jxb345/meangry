import React, { useState, useEffect } from "react";

const Signup = () => {

  const [email, setEmail] = useState({});
  const [users, setUsers] = useState(0);
  const [buttonMessage, setButtonMessage] = useState("");

  const handleChangeForEmail = (e) => {
    setEmail({ email: e.target.value });
  };

  const handleSubmit = () => {
    if (Object.keys(email).length > 0) {
      fetch("/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      })
      .then((response) => response.json())
      .then((data) => {
        setButtonMessage(data.status);
      });
    }
  };

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  });

  return (
    <div>
      <p className="receive-text">
        ...<i>receive</i> anonymous email:
      </p>
      <form>
        <input
          type="text"
          className="email-signup"
          placeholder="your email address"
          onChange={handleChangeForEmail}
          required
        />
        <br />
        {buttonMessage === "" ? (
          <button
            className="signup-button"
            id="signup"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        ) : (
          <button
            className="signup-button"
            id="signup"
            type="button"
            style={{ backgroundColor: "Grey;color: White" }}
            onClick={handleSubmit}
          >
            {buttonMessage}
          </button>
        )}
      </form>
      <div>
        <br />
        <br />
      </div>
      <div className="signup-tally">{users} users receiving heatMail</div>
    </div>
  );
}

export default Signup;
