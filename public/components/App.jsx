import React, { useState } from 'react';
import Signup from './Signup.jsx';
import EmailForm from './EmailForm.jsx';

function App ()  {
  const [signup, setSignup] = useState(false);
  const [emailForm, setEmailForm] = useState(false);

  return (
    <div className="grid">
          <div className="one">
            heatmail
          </div>
          <div className="two">
          Receive or Write
          </div>
          <div className="three">
            { (!signup)?
              <button onClick={() => { setSignup(!signup)}}>RECEIVE</button> :
              <Signup />
            }
          </div>
          <div className="four">
            { (!emailForm) ?
              <button onClick={() => { setEmailForm(!emailForm)}}>WRITE</button> :
              <EmailForm />
            }
          </div>
        </div>
    )
}

export default App;