import React, { useState } from 'react';
import Preview from './Preview.jsx'


const EmailForm = () => {

  const  [subject, setSubject] = useState('');
  const  [body, setBody] = useState('');
  const [previewChecked, setPreviewChecked] = useState(true);


    const handleSubjectChange = (e) => {
      e.preventDefault();
      setSubject(e.target.value)
    }

    const handleBodyChange = (e) => {
      e.preventDefault();
      setBody(e.target.value)
      console.log('body', body)
    }

    async function postEmail (data) {
      const response = await fetch('/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return await response;
    }

    const handleSend = () => {
      let email = {
        subject: subject,
        body: body
      }

      console.log('ex', JSON.stringify(email))

      postEmail(email)
        .then((d) => {
          console.log('d', d)
        });
    }

    const togglePreview = () => {
      setPreviewChecked(!previewChecked);
      console.log('previewChecked', previewChecked)
    }

  return (
  <div>
    <input type="text" className="subject" placeholder="Subject" onChange={handleSubjectChange}/>
    <br/>
    <textarea type="text" className="body" rows="20" cols="100" onChange={handleBodyChange}/>
    <br/>
    <div>
      {
        (previewChecked) ?
      <button type="button" onClick={() => {<Preview body={body} subject={subject} handleSend={handleSend}/>}}>PREVIEW</button>
      :
      <button type="button">SEND</button>
      }
      <input type="checkbox" id="preview" name="preview" onChange={togglePreview} defaultChecked/>
      <label htmlFor="preview">Preview Before Sending Email</label>
    </div>

  </div>
  )
}

export default EmailForm;

