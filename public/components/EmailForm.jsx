import React, { useEffect } from "react";

const EmailForm = (props) => {
  const handleSubjectChange = (e) => {
    e.preventDefault();
    props.setSubject(e.target.value);
  };

  const handleBodyChange = (e) => {
    e.preventDefault();
    props.setBody(e.target.value);
  };

  useEffect(() => {
    document.getElementById("subject").value = props.subject;
    document.getElementById("body").value = props.body;
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
        rows="11"
        cols="69"
        placeholder="because..."
        onChange={handleBodyChange}
      />
      <br />
    </div>
  );
};

export default EmailForm;
