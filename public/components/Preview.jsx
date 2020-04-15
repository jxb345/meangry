import React, { useState } from 'react';

const Preview = (props) => {
  console.log('props', props);
  return (
    <div>
      <div className="subject-preview">
        {props.subject}
      </div>
      <br/>
      <div className="body-preview">
        {props.body}
      </div>
    </div>
  )
}

export default Preview;