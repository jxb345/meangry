import React, { useState } from 'react';

const Preview = (props) => {
  console.log('props', props);
  return (
    <div>
      <p>
        Preview
      </p>
      <p>
        {props.subject}
      </p>
      <p>
        {props.body}
      </p>
    </div>
  )
}

export default Preview;