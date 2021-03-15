import React, { useEffect } from "react";

const PreviewExplanationText = (props) => {
  const { emailSent, handleSendEmail, sendButton } = props;

  useEffect(() => {
    console.log('emailSent in PET', emailSent)
  })

  return (
    <div>
      {!emailSent ? (


      <div className="preview-explanation-text-wrapper">
        <div className="you-are-title">
          preview{" "}
          <img
            className="thought-bubble-you-are"
            src="./t-bubble-reg.png"
            height="43px"
            width="73px"
            alt="thought bubble"
          />
        </div>
        <div className="explanation-text">
          Read your message thoroughly
          .
          <br />
          Follow all NO rules.
          <br />
          Click
          <span>
            {" "}
            <button
              className="reply-graphic"
              onClick={handleSendEmail}
              disabled={sendButton}
            >
              Send
            </button>
          </span>{" "}
          <div className="explanation-text-last">
            ...to feel that cathartic release.
          </div>
        </div>
    </div>
      )
      :
      (
        <div>
        </div>
      )}
  </div>

  );
};

export default PreviewExplanationText;
