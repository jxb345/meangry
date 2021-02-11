import React, { useState, useEffect } from "react";
import Signup from "./Signup.jsx";
import EmailForm from "./EmailForm.jsx";
import ExplanationText from "./ExplanationText.jsx"
import Preview from "./Preview.jsx";
import PreviewExplanationText from "./PreviewExplanationText.jsx"
import Sidebar from "./Sidebar.jsx";

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
    // commenting out .then as it caused an error;
    // I have not removed it yet b/c I don't know
    // why it was included in the first place
    // .then((data) => {})
  };

  const handleConfirmationSent = () => {
    setPreview(null);
    setPreviewChecked(true);
    setBody("");
    setEmailSent(false);
    setBackButton(false);
    setSendButton("disabled");
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
          // <div className="preview-explanation-text-wrapper">
          //   {/* <div className="preview-title"> */}
          //   <div className="you-are-title">
          //     Preview{" "}
          //     <img
          //       // className="thought-bubble-preview"
          //       className="thought-bubble-you-are"
          //       src="./bubble-dg.png"
          //       height="43px"
          //       width="73px"
          //       // height="58px"
          //       // width="88px"
          //       alt="thought bubble"
          //     />
          //   </div>
          //   {/* <div className="preview-explanation-text"> */}
          //   <div className="explanation-text">
          //     Read your message thoroughly
          //      {/* below before sending */}
          //      .
          //     <br />
          //     Follow all IMPORTANT rules.
          //     <br />
          //     Click
          //     <span>
          //       {" "}
          //       <button
          //         className="reply-graphic"
          //         onClick={handleSendEmail}
          //         disabled={sendButton}
          //       >
          //         Send
          //       </button>
          //     </span>{" "}
          //     <div className="explanation-text-last">
          //     ...to feel that cathartic release.
          //     </div>
          //   </div>
          // </div>
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
      <div className="grid-buttons">
        {previewChecked ? (
          <button
            className="button-preview"
            type="button"
            onClick={handlePreviewClick}
          >
            Preview
          </button>
        ) : !emailSent ? (
          !backButton ? (
            <button
              className="button-send"
              type="button"
              onClick={handleSendEmail}
              disabled={sendButton}
            >
              Send
            </button>
          ) : (
            <div className="edit-send-buttons-wrapper">
              <button
                className="edit-send-buttons"
                type="button"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                className="edit-send-buttons"
                type="button"
                onClick={handleSendEmail}
                disabled={sendButton}
              >
                Send
              </button>
            </div>
          )
        ) : (
          <button type="button" className="back-button" onClick={handleConfirmationSent}>
            Back
          </button>
        )}
        {preview === null ? (
          <div className="preview-button-container">
            <div className="preview-button">
                <input
                  type="checkbox"
                  id="preview"
                  name="preview"
                  onChange={togglePreview}
                  defaultChecked
                  />
                <label htmlFor="preview">
                  &nbsp;&nbsp;preview before sending email
                </label>
              </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
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
