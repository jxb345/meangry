import React from 'react';


function App ()  {


  return (
      <div>
        <div>
          <p>MeAngry</p>
        </div>
      <form action="/send" method="POST">
          <input type="text" className="subject" placeholder="Subject"/>
          <br/>
          <input type="text" className="body"/>
          <br/>
          <button type="submit">SEND</button>
        </form>
      </div>
    )

}

export default App;