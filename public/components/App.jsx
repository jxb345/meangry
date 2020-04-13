import React, { useState } from 'react';
import Signup from './Signup.jsx';
import EmailForm from './EmailForm.jsx';

function App ()  {
  const [signup, setSignup] = useState(false);
  const [emailForm, setEmailForm] = useState(false);

  return (
    <div className="grid">
          <div className="one">
            <img src="./heatMailLogo.png" height="40" width="40" />
            <p className="vertical-center">
              heatMail
            </p>

          </div>
          <div className="two">
          <br/>
          <span className="furious">
            You are FURIOUS!
          </span>
          <p>
            That email from your colleague, friend, family member, etc. sets off an emotional surge <br/> that <i>needs</i> an outlet,
            but your primitive fight response will only lead to regrets later... <br/> instead, say what you MEAN and send it off <u>anonymously</u> to a stranger.
          </p>
          </div>
          <div className="three">
              <Signup />

          </div>
          <div className="four">
              <EmailForm />

          </div>
        </div>
    )
}

export default App;