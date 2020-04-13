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
          Receive or Write
          </div>
          <div className="three">
            { (!signup)?
              <button onMouseOver={() => { setSignup(!signup)}}>RECEIVE</button> :
              <Signup />
            }
          </div>
          <div className="four">
            { (!emailForm) ?
              <button onMouseOver={() => { setEmailForm(!emailForm)}}>WRITE</button> :
              <EmailForm />
            }
          </div>
        </div>
    )
}

export default App;