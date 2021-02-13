import React, { useState, useEffect } from "react";
import Buttons from "./Buttons.jsx";
import EmailForm from "./EmailForm.jsx";
import ExplanationText from "./ExplanationText.jsx";
import Preview from "./Preview.jsx";
import PreviewExplanationText from "./PreviewExplanationText.jsx";
import Sidebar from "./Sidebar.jsx";
import Signup from "./Signup.jsx";

function App() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [previewChecked, setPreviewChecked] = useState(true);
  const [preview, setPreview] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const [sendButton, setSendButton] = useState("disabled");
  const arrow = document.getElementsByClassName("arrow-img");

  const handleEdit = () => {
    setPreview(null);
    setPreviewChecked(true);
    setBackButton(false);
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
      <div className="grid-title">
        <div className="heatmail-logo">
        <img src="./heatMailLogo.png"
        // height="35"
        // width="35"
        height="25px"
        width="25px"
        />
        </div>
        <div className="heatmail-title">heatMail</div>
      </div>
      {subject === "" && body === "" ? (
        <div></div>
      ) : emailSent === false ? (
        <div className="grid-sidebar-rules">
          <Sidebar />
        </div>
      ) : (
        <div></div>
      )}
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
      </div> )  : emailSent === false ? (
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
        backButton={backButton}
        emailSent={emailSent}
        handleSendEmail={handleSendEmail}
        sendButton={sendButton}
        handleEdit={handleEdit}
        togglePreview={togglePreview}
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
