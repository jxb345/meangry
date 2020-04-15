import React, { useState } from 'react';
import Preview from './Preview.jsx'


const EmailForm = (props) => {
  // moved to App.jsx
    // const  [subject, setSubject] = useState('');
    // const  [body, setBody] = useState('');
    // const [previewChecked, setPreviewChecked] = useState(true);


    const handleSubjectChange = (e) => {
      e.preventDefault();
      props.setSubject(e.target.value)
    }

    const handleBodyChange = (e) => {
      e.preventDefault();
      props.setBody(e.target.value)
    }

    // moved to App.jsx
      // async function postEmail (data) {
      //   const response = await fetch('/send', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(data)
      //   });
      //   return await response;
      // }

    // moved to App.jsx
      // const handleSend = () => {
      //   let email = {
      //     subject: subject,
      //     body: body
      //   }

      //   console.log('ex', JSON.stringify(email))

      //   postEmail(email)
      //     .then((d) => {
      //       console.log('d', d)
      //     });
      // }
    // moved to App.jsx
      // const togglePreview = () => {
      //   setPreviewChecked(!previewChecked);
      //   console.log('previewChecked', previewChecked)
      // }

  return (
  <div>
    <input type="text" className="subject" placeholder="subject" onChange={handleSubjectChange}/>
    <br/>
    <textarea type="text" className="body" rows="15" cols="75" onChange={handleBodyChange}/>
    <br/>
    {/* Moved to App.jsx}
        {/* <div>
          {
            (previewChecked) ?
          <button type="button" onClick={() => {<Preview body={body} subject={subject} handleSend={handleSend}/>}}>PREVIEW</button>
          :
          <button type="button">SEND</button>
          }
          <input type="checkbox" id="preview" name="preview" onChange={togglePreview} defaultChecked/>
          <label htmlFor="preview">Preview Before Sending Email</label>
        </div> */}

  </div>
  )
}

export default EmailForm;

