import React, { useState, useEffect } from "react";
import Buttons from "./Buttons.jsx";
import EmailForm from "./EmailForm.jsx";
import ExplanationText from "./ExplanationText.jsx";
import Preview from "./Preview.jsx";
import PreviewExplanationText from "./PreviewExplanationText.jsx";
import Sidebar from "./Sidebar.jsx";
import Signup from "./Signup.jsx";
import Title from "./Title.jsx"

function App() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [previewChecked, setPreviewChecked] = useState(true);
  const [preview, setPreview] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const [sendButton, setSendButton] = useState("disabled");

  const handleConfirmationSent = () => {
    setPreview(null);
    setPreviewChecked(true);
    setBody("");
    setEmailSent(false);
    setBackButton(false);
    setSendButton("disabled");
  };

  const handleEdit = () => {
    setPreview(null);
    setPreviewChecked(true);
    setBackButton(false);
  };

  const handlePreviewClick = () => {
    setPreview(true);
    setPreviewChecked(false);
    setBackButton(true);
  };

  const handleSendEmail = () => {
    setPreview(true);
    setEmailSent(true);
    let email = {
      subject: subject,
      body: body,
    };
    postEmail(email);
  };

  const postEmail = (email) => {
    fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
  };

  const togglePreview = () => {
    setPreviewChecked(!previewChecked);
  };

  useEffect(() => {
    console.log("preview----", preview);
    console.log("previewChecked----", previewChecked);
    console.log("emailSent", emailSent);
    console.log("backButton", backButton);
    if (emailSent) {
      setSubject("");
    }
  });

  return (
    <div className="grid">
      <Title />
      {/*  */}
    { subject === "" && body === "" ? (
      <div className="grid-text">
        {preview === null ? (
          <ExplanationText />
        ) : emailSent === false ? (
          <PreviewExplanationText
            handleSendEmail={handleSendEmail}
            sendButton={sendButton}
            />
        ) : (
          <div></div>
        )}
      </div>
       )  : emailSent === false ? (
        <div className="grid-sidebar-rules">
          <Sidebar />
        </div>
      ):
      <div>
      </div> }
      <div className="grid-signup">
        <Signup />
      </div>

      <div className="grid-body">
        {preview === null ? (
          <EmailForm
            subject={subject}
            setSubject={setSubject}
            body={body}
            setBody={setBody}
            setSendButton={setSendButton}
          />
        ) : (
          <Preview
            body={body}
            subject={subject}
            handleSendEmail={handleSendEmail}
            emailSent={emailSent}
          />
        )}
      </div>
      <Buttons
        preview={preview}
        previewChecked={previewChecked}
        backButton={backButton}
        emailSent={emailSent}
        handleSendEmail={handleSendEmail}
        sendButton={sendButton}
        handleEdit={handleEdit}
        togglePreview={togglePreview}
        setPreviewChecked={setPreviewChecked}
        handleConfirmationSent={handleConfirmationSent}
        handlePreviewClick={handlePreviewClick}
      />
      {/* {subject === "" && body === "" ? (
        <div></div>
      ) : emailSent === false ? (
        <div className="grid-sidebar-rules">
          <Sidebar />
        </div>
      ) : (
        <div></div>
      )} */}
      <div className="grid-contact">
        <span>&#169;&nbsp;heatMail 2021</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="mailto:too.angrily@gmail.com">Contact</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/about">About</a>
      </div>
    </div>
  );
}

export default App;
