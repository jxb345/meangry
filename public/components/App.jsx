import React, { useState } from 'react';


function App ()  {
const  [subject, setSubject] = useState('');
const  [body, setBody] = useState('');
let sub = '';

  const handleSubjectChange = (e) => {
    e.preventDefault();
    setSubject(e.target.value)
  }

  const handleBodyChange = (e) => {
    e.preventDefault();
    setBody(e.target.value)
    console.log('body', body)
  }

  return (
      <div>
      <form action="/send" method="POST">
          <input type="text" className="subject" placeholder="Subject" onChange={handleSubjectChange}/>
          <br/>
          <input type="text" className="body" onChange={handleSubjectChange}/>
          <br/>
          <button type="submit">SEND</button>
        </form>
      </div>
    )

}

export default App;