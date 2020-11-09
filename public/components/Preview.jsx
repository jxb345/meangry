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
          Feeling any better? <br/>
          Your heatMail has been sent.
        </div>
      }
    </div>
  )
}

export default Preview;