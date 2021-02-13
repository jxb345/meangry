import React from "react";

const Preview = (props) => {

  const { subject, body } = props;


  return (
    <div>
      {!props.emailSent ? (
        <div className="preview">
          <div className="subject-preview">{subject}</div>
          <div className="body-preview">{body}</div>
        </div>
      ) : (
        <div className="sent-preview">
          Your heatMail has been sent. <br />
          Hope you're feeling a bit better.
        </div>
      )}
    </div>
  );
};

export default Preview;
