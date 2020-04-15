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


  const handlePreviewClick = () => {
    setPreview(true);
    setPreviewChecked(false);
  }

  const handleSend = () => {
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

  const handleSent = () => {
    setPreview(null);
    setPreviewChecked(true);
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
            heatMail
          </p>

        </div>
        <div className="two">
        <span className="furious">
          You are FURIOUS!
        </span>
        <br/>
        <span>
          That email you received sets off an emotional surge <br/> that <i>needs</i> an outlet,
          but don't click 'REPLY'.
          {/* your primitive fight response will only lead to regrets later...  */}
          <br/> Instead, fire it off <u>anonymously</u> to a stranger.
        </span>
        </div>
        <div className="three">
          <Signup />
        </div>
        <div className="four">
          {
            (preview === null)
            ?
            <EmailForm setSubject={setSubject} setBody={setBody}/>
            :
            <Preview body={body} subject={subject} handleSend={handleSend} emailSent={emailSent} />
          }
        </div>
        <div className="five">
          {
            (previewChecked) ?
          <button type="button" onClick={handlePreviewClick}>PREVIEW</button>
          :
          (!emailSent) ?
          <button type="button" onClick={handleSend}>SEND</button>
          :
          <button type="button" onClick={handleSent}>BACK</button>
          }
          {
            (preview === null)
            ?
            <div>
              <input type="checkbox" id="preview" name="preview" onChange={togglePreview} defaultChecked/>
              <label htmlFor="preview">Preview Before Sending Email</label>
            </div>
            :
            <p></p>
          }
          </div>
      </div>
    )
}


export default App;