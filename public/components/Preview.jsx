import React, { useState } from 'react';

const Preview = (props) => {
  console.log('props', props);
  return (
    <div>
      {
        (!props.emailSent)
        ?
        <div className="preview-window">
          <div
          // className="preview-subject"
          >
            {props.subject}
          </div>
          <br/>
          <div
          // className="preview-body"
          >
            {props.body}
          </div>
        </div>
        :
        <div className="sent-preview">
          Your fury has been sent.
        </div>
      }
    </div>
  )
}

export default Preview;