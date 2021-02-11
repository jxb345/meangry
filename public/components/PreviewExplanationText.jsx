import React from 'react';

const PreviewExplanationText = (props) => {
  return (
    <div className="preview-explanation-text-wrapper">
    {/* <div className="preview-title"> */}
    <div className="you-are-title">
      Preview{" "}
      <img
        // className="thought-bubble-preview"
        className="thought-bubble-you-are"
        src="./bubble-dg.png"
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
          onClick={props.handleSendEmail}
          disabled={props.sendButton}
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
}

export default PreviewExplanationText