import React, { useEffect } from "react";

const EmailForm = (props) => {
  const { body, setBody, setSendButton, setSubject, subject } = props;
  const handleSubjectChange = (e) => {
    e.preventDefault();
    setSubject(e.target.value);
  };

  const handleBodyChange = (e) => {
    e.preventDefault();
    setBody(e.target.value);
    setSendButton("");
  };

  useEffect(() => {
    document.getElementById("subject").value = subject;
    document.getElementById("body").value = body;
  });

  return (
    <div>
      <input
        type="text"
        id="subject"
        className="subject"
        placeholder="I feel _______"
        onChange={handleSubjectChange}
      />
      <br />
      <textarea
        type="text"
        id="body"
        className="body"
        rows="9"
        cols="69"
        placeholder="because..."
        onChange={handleBodyChange}
      />
      <br />
    </div>
  );
};

export default EmailForm;
