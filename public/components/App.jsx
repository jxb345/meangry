import React, { useState } from 'react';
import Signup from './Signup.jsx';
import EmailForm from './EmailForm.jsx';
import Preview from './Preview.jsx';

function App ()  {
  // const [signup, setSignup] = useState(false);
  // const [emailForm, setEmailForm] = useState(false);
  const  [subject, setSubject] = useState('');
  const  [body, setBody] = useState('');
  const [previewChecked, setPreviewChecked] = useState(true);
  const [preview, setPreview] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [backButton, setBackButton] = useState(false);


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
    setEmailSent(true);
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

  const handleConfirmationSent = () => {
    setPreview(null);
    setPreviewChecked(true);
    setBody('');
    setSubject('');
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

  // const handlePreviewClick = () => {
  //   setPreview(true)};
  // }

  return (
    <div className="grid">
        <div className="one">
          <img src="./heatMailLogo.png" height="40" width="40" />
          <p className="vertical-center">
            {/* heatMail */}
          </p>

        </div>
        <div className="two">
          <div className="arrows">
          <img src="chalk-steam.png" height="100" width="100" alt=""/>
          <br/>
          </div>
        {/* <span className="furious">
          You are FURIOUS!
        </span> */}
        <span>
          That email you received sets off an emotional surge <br/> that <i>needs</i> an outlet,
          but don't click 'REPLY'. <br/>
          {/* your primitive fight response will only lead to regrets later...  */}
          Instead, fire it off <u>anonymously</u> to a stranger.
        </span>
        </div>
        <div className="three">
          <Signup />
        </div>
        <div className="four">
          {
            (preview === null)
            ?
            <EmailForm subject={subject} setSubject={setSubject} body={body} setBody={setBody}/>
            :
            <Preview body={body} subject={subject} handleSendEmail={handleSendEmail} emailSent={emailSent} />
          }
        </div>
        <div className="five">
          {
            (previewChecked)
            ?
              <button type="button" onClick={handlePreviewClick}>PREVIEW</button>
            :
              (!emailSent)
              ?
              (!backButton)
              ?
              <button type="button" onClick={handleSendEmail}>SEND</button>
              :
                <div>
                  <button type="button" onClick={handleEdit}>EDIT</button>
                  <button type="button" onClick={handleSendEmail}>SEND</button>
                </div>
              :
                <button type="button" onClick={handleConfirmationSent}>BACK</button>
          }
          {
            (preview === null)
            ?
            <div>
              <input type="checkbox" id="preview" name="preview" onChange={togglePreview} defaultChecked/>
              <label htmlFor="preview">preview before sending fury</label>
            </div>
            :
            <p></p>
          }
          </div>
      </div>
    )
}


export default App;