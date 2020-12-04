import React, { useState, useEffect } from 'react';
import Signup from './Signup.jsx';
import EmailForm from './EmailForm.jsx';
import Preview from './Preview.jsx';
import Sidebar from './Sidebar.jsx';

function App () {
  const  [subject, setSubject] = useState('');
  const  [body, setBody] = useState('');
  const [previewChecked, setPreviewChecked] = useState(true);
  const [preview, setPreview] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const [previewHeaderMessage, setPreviewHeaderMessage] = useState('Please Review Your Message')
  const arrow = document.getElementsByClassName('arrow-img');

  const handleEdit = () => {
    setPreview(null);
    setPreviewChecked(true);
    setBackButton(false);
  }

  const handlePreviewClick = () => {
    setPreview(true);
    setPreviewChecked(false);
    setBackButton(true);
  }

  const handleSendEmail = () => {
    setPreviewHeaderMessage('');
    setPreview(true);
    setEmailSent(true);
    let email = {
      subject: subject,
      body: body
    }
    postEmail(email)
      .then((data) => {
      });
  }

  const handleConfirmationSent = () => {
    setPreview(null);
    setPreviewChecked(true);
    setBody('');
    setEmailSent(false);
    setBackButton(false);
    setPreviewHeaderMessage('Please Review Your Message.');
  }

  const postEmail = (email) => {
    fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })
  }


  const togglePreview = () => {
    setPreviewChecked(!previewChecked);
  }

  useEffect( () => {
    console.log('preview----', preview)
    console.log('previewChecked----', previewChecked)
    console.log('emailSent', emailSent)
    console.log('backButton', backButton)
    if (emailSent) {
      setSubject('')
    }
    if (preview) {
      arrow[0].style.visibility = 'visible';
    }
    if (emailSent) {
      arrow[0].style.visibility = 'hidden';
    }
  })

  return (
    <div className="grid">
        <div className="grid-title">
          <img src="./heatMailLogo.png" height="40" width="40" />
          <p className="vertical-center">
            heatMail
          </p>

        </div>
        <div className="grid-text">
          {
            (preview === null)
            ?
      <div className="explanation-text-wrapper">
        <div className="you-are-title">
          You feel <img className="thought-bubble-img" src="./bubble.png" height="80" width="110" alt="thought bubble"/>
        </div>
        <div className="explanation-text">
          That message ignites an emotional surge  <br/> that <i>needs</i> an outlet -
          but DON&apos;T <span> <a href="http://localhost:3600/doNotReply"><button title="do NOT reply" className="reply-graphic">REPLY</button></a></span>
          <span className="explanation-text-last">
          <br/> Instead, send an <strong>anon</strong> note to a random.
          </span>
        </div>
        </div>
        :
          <div className="preview-header">
              {previewHeaderMessage}
              <br/>
              <div className="arrow-img">
                <img src="./arrow.png" alt="down arrow" height="50px" width="50px"/>
              </div>
          </div>
        }
        </div>
        <div className="grid-signup">
          <Signup />
        </div>

        <div className="grid-body">
          {
            (preview === null)
            ?
            <EmailForm subject={subject} setSubject={setSubject} body={body} setBody={setBody}/>
            :
            <Preview body={body} subject={subject} handleSendEmail={handleSendEmail} emailSent={emailSent} />
          }
        </div>
        <div className="grid-buttons">
          {
            (previewChecked)
            ?
              <button type="button" onClick={handlePreviewClick}>Preview</button>
            :
              (!emailSent)
              ?
              (!backButton)
              ?
              <button type="button" onClick={handleSendEmail}>Send</button>
              :
                <div className="edit-send-buttons-wrapper">
                  <button className="edit-send-buttons" type="button" onClick={handleEdit}>Edit</button>
                  <button className="edit-send-buttons" type="button" onClick={handleSendEmail}>Send</button>
                </div>
              :
                <button type="button" onClick={handleConfirmationSent}>Back</button>
          }
          {
            (preview === null)
            ?
            <div className="preview-button">
              <input type="checkbox" id="preview" name="preview" onChange={togglePreview} defaultChecked/>
              <label htmlFor="preview">&nbsp;&nbsp;preview before sending email</label>
            </div>
            :
            <p></p>
          }
          </div>
          {
            (subject === '' && body === '')
            ?
          <div>
          </div>
          :
          <div className="grid-sidebar-rules">
            <Sidebar />
          </div>
          }
    </div>
    )
}

export default App;