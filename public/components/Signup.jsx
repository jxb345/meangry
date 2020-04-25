import React, { useState } from 'react';

function Signup () {
  const [email, setEmail] = useState({});
  const [signup, setSignup] = useState(true);
  const [emailAdded, setEmailAdded] = useState(false);


  const handleChangeForEmail = (e) => {
    setEmail({ email: e.target.value });

  }

  const handleSubmit = () => {
    console.log('emai', email)
    fetch('/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })
    .then(data => {
      console.log('data', data);
      setEmailAdded(true);
    })
  }

  return (
    <div>
      <p className="receive-text">
        ...<i>receive</i> anonymous fury:
      </p>
      <form>
        <input type="text" className="email-signup" placeholder="your email address" onChange={handleChangeForEmail}/>
        <br/>
        {
        (!emailAdded)
        ?
          <button className="signup-button" id="signup" type="button" onClick={handleSubmit}>GET FURY</button>
          :
          <button className="signup-button" id="signup" type="button" style={{backgroundColor: "Grey"}} onClick={handleSubmit}>ADDED</button>
        }
    </form>
    </div>
  )

}

export default Signup;