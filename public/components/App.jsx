import React, { useState, useEffect } from 'react';
import Signup from './Signup.jsx';
import EmailForm from './EmailForm.jsx';
import Preview from './Preview.jsx';
import Sidebar from './Sidebar.jsx';

function App ()  {
  // const [signup, setSignup] = useState(false);
  // const [emailForm, setEmailForm] = useState(false);
  const  [subject, setSubject] = useState('');
  const  [body, setBody] = useState('');
  const [previewChecked, setPreviewChecked] = useState(true);
  const [preview, setPreview] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [backButton, setBackButton] = useState(false);


  // emailSent === true && preview !== null - to display email confirmation sent message


  const handleEdit = () => {
    setPreview(null);
    setPreviewChecked(true);
  }

  const handlePreviewClick = () => {
    setPreview(true);
    setPreviewChecked(false);
    setBackButton(true)// show 'edit' button
  }

  const handleSendEmail = () => {
    setPreview(true)
    setEmailSent(true);
    let email = {
      subject: subject,
      body: body
    }

    postEmail(email)
      .then((data) => {
        console.log('data', data)
      });
  }

  const handleConfirmationSent = () => {
    setPreview(null);
    setPreviewChecked(true);
    setBody('');
    setSubject('');
    setEmailSent(false);
    setBackButton(false);
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

  const togglePreview = () => {
    setPreviewChecked(!previewChecked);
    console.log('previewChecked', previewChecked)
  }

  useEffect( () => {
    console.log('previewChecked', previewChecked);
    console.log('preview', preview);
    console.log('emailSent', emailSent);
    console.log('backButton' , backButton);
    console.log('........................................')
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
            <div>
        <span className="you-are">
          You are <img className="thought-bubble" src="./bubble.png" height="80" width="110" alt="thought bubble"/>
        </span>
        <br/>
        <span className="explanation-text">
          The message that you just read ignites an emotional <br/> surge that <i>needs</i> an outlet -
          but DON&apos;T <span> <button className="reply-graphic">REPLY</button></span>
          {/* click &quot;REPLY.&quot; */}
          {/* your primitive fight response will only lead to regrets later...  */}
          <span className="e-t">
          <br/> Instead, fire it off <strong>anonymously</strong> to a stranger.
          </span>
        </span>

        </div>
        :
          <div className="preview-header">
            Review Your Message Below
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
            // confirmation message displayed in Preview when emailSent === true
            <Preview body={body} subject={subject} handleSendEmail={handleSendEmail} emailSent={emailSent} />
          }
        </div>
        <div className="grid-buttons">
          {
            (previewChecked)
            ?
              // setPreview(true); setPreviewChecked(false); setBackButton(true)
              <button type="button" onClick={handlePreviewClick}>PREVIEW</button>
            :
              (!emailSent)
              ?
              (!backButton)
              ?
              // setEmailSent(true);
              <button type="button" onClick={handleSendEmail}>SEND</button>
              :
                <div className="edit-send-buttons-wrapper">
                  <button className="edit-send-buttons" type="button" onClick={handleEdit}>EDIT</button>
                  <button className="edit-send-buttons" type="button" onClick={handleSendEmail}>SEND</button>
                </div>
              :
                <button type="button" onClick={handleConfirmationSent}>BACK</button>
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
            (subject === '')
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