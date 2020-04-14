import React, { useState } from 'react';
import Signup from './Signup.jsx';
import EmailForm from './EmailForm.jsx';

function App ()  {
  const [signup, setSignup] = useState(false);
  const [emailForm, setEmailForm] = useState(false);
  const [p, setP] = useState(true);

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
          <EmailForm />
        </div>
      </div>
    )
}

export default App;