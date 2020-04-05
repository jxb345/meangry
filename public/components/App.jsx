import React, { useState } from 'react';


function App ()  {
const  [subject, setSubject] = useState('');
const  [body, setBody] = useState('');

  const handleSubjectChange = (e) => {
    e.preventDefault();
    setSubject(e.target.value)
  }

  const handleBodyChange = (e) => {
    e.preventDefault();
    setBody(e.target.value)
    console.log('body', body)
  }

  const handleSubmit = () => {
    let email = {
      subject: subject,
      body: body
    }

    fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicatoin/json'
      },
      body: JSON.stringify(email),
    })
  }

  return (
      <div>
      <form>
          <input type="text" className="subject" placeholder="Subject" onChange={handleSubjectChange}/>
          <br/>
          <textarea type="text" className="body" rows="20" cols="100" onChange={handleBodyChange}/>
          <br/>
          <button type="submit" onSubmit={handleSubmit}>SEND</button>
        </form>
      </div>
    )

}

export default App;