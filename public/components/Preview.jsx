import React from "react";

const Preview = (props) => {

  const { body, emailSent, subject,  } = props;


  return (
    <div>
      {!emailSent ? (
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
