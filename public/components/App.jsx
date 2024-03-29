import React, { useState, useEffect } from "react";
import Buttons from "./Buttons.jsx";
import EmailForm from "./EmailForm.jsx";
import ExplanationText from "./ExplanationText.jsx";
import InfoText from "./InfoText.jsx";
import Footer from "./Footer.jsx";
import Preview from "./Preview.jsx";
import Signup from "./Signup.jsx";
import Title from "./Title.jsx";

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
        <div className="grid-text">
      { body === "" ? (
          <ExplanationText />
          ) : (
          <InfoText
            emailSent={emailSent}
            handleSendEmail={handleSendEmail}
            preview={preview}
            sendButton={sendButton}
          />
            )
          }
          </div>
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
      <Footer />
    </div>
  );
}

export default App;
