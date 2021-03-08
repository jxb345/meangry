import React from "react";

const PreviewExplanationText = (props) => {
  const { handleSendEmail, sendButton } = props;

  return (
    <div className="preview-explanation-text-wrapper">
      {/* <div className="preview-title"> */}
      <div className="you-are-title">
        preview{" "}
        <img
          // className="thought-bubble-preview"
          className="thought-bubble-you-are"
          src="./t-bubble-reg.png"
          height="43px"
          width="73px"
          // height="58px"
          // width="88px"
          alt="thought bubble"
        />
      </div>
      {/* <div className="preview-explanation-text"> */}
      <div className="explanation-text">
        Read your message thoroughly
        {/* below before sending */}
        .
        <br />
        Follow all IMPORTANT rules.
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
  );
};

export default PreviewExplanationText;
