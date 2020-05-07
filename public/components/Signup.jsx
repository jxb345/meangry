import React, { useState, useEffect } from 'react';

function Signup () {
  const [email, setEmail] = useState({});
  const [signup, setSignup] = useState(true);
  const [emailAdded, setEmailAdded] = useState(false);
  const [users, setUsers] = useState(0);


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

  useEffect(() => {
    // place holder to fetch number of users
    fetch('/users')
    .then(response => response.json())
    .then(data => setUsers(data.users))
  })

  return (
    <div>
      <div>
        {console.log('uers', users)}
        {users} signed up to receive heatMail.
      </div>
      <p className="receive-text">
        ...<i>receive</i> anonymous email:
      </p>
      <form>
        <input type="text" className="email-signup" placeholder="your email address" onChange={handleChangeForEmail}/>
        <br/>
        {
        (!emailAdded)
        ?
          <button className="signup-button" id="signup" type="button" onClick={handleSubmit}>SIGN UP</button>
          :
          <button className="signup-button" id="signup" type="button" style={{backgroundColor: "Grey"}} onClick={handleSubmit}>ADDED</button>
        }
    </form>
    </div>
  )

}

export default Signup;