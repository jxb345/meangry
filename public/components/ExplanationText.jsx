
import React from 'react';



const ExplanationText = () => {
  return (
    <div className="title-explanation">
      <div className="you-are-title">
        you&#8202;{" "}{" "}{" "}{" "}
        <img
          className="thought-bubble-you-are"
          src="./t-bubble-reg.png"
          height="43px"
          width="73px"
          // height="58px"
          // width="88px"
          alt="thought bubble"
        />
      </div>
      <div className="explanation-text">
        That message ignites an emotional
        <br/>
      surge that <i>needs</i> an outlet but
      <br/>
      DON'T
      <span>
          {" "}
          <a href="http://localhost:3600/doNotReply">
            <button title="do NOT reply" className="reply-graphic">
              REPLY
            </button>
          </a>
        </span>
      <div className="explanation-text-last">
          Just send anonymously to a random...
        </div>
      </div>
  </div>
  );
};

export default ExplanationText;