import React, { useState } from 'react';

const Preview = (props) => {

  return (
    <div>
      {
        (!props.emailSent)
        ?
        <div className="preview">
          <div className="subject-preview">
            {props.subject}
          </div>
          <div className="body-preview">
            {props.body}
          </div>
        </div>
        :
      <div className="sent-preview">
          Your heatMail has been sent. <br/>
          Hope you're feeling a bit better.
        </div>
      }
    </div>
  )
}

export default Preview;