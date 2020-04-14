import React, { useState } from 'react';
import Signup from './Signup.jsx';
import EmailForm from './EmailForm.jsx';
import Preview from './Preview.jsx';

function App ()  {
  const [signup, setSignup] = useState(false);
  const [emailForm, setEmailForm] = useState(false);
  const  [subject, setSubject] = useState('');
  const  [body, setBody] = useState('');
  const [previewChecked, setPreviewChecked] = useState(true);
  const [preview, setPreview] = useState(null);


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
            <Preview body={body} subject={subject} handleSend={handleSend} />
          }
        </div>
        <div>
          {
            (previewChecked) ?
          <button type="button" onClick={() => { setPreview(true)}}>PREVIEW</button>
          :
          <button type="button">SEND</button>
          }
          <input type="checkbox" id="preview" name="preview" onChange={togglePreview} defaultChecked/>
          <label htmlFor="preview">Preview Before Sending Email</label>
        </div>
      </div>
    )
}

export default App;