import React, { useState } from 'react';

const Preview = (props) => {
  console.log('props', props);
  return (
    <div>
      {
        (!props.emailSent)
        ?
        <div className="preview">
          <div className="subject-preview">
            {props.subject}
          </div>
          <br/>
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