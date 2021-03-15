import React, { useEffect } from 'react';
import Sidebar from "./Sidebar.jsx";
import PreviewExplanationText from "./PreviewExplanationText.jsx";

const InfoText = (props) => {

  const { emailSent, handleSendEmail, preview, sendButton } = props

  useEffect(() => {
    console.log('preview in infotext', preview)

  })

  return (
    <div>
      { preview === null ?
      <div className="grid-sidebar-container">
        <div className="grid-sidebar-rules">
          <Sidebar />
        </div>
      </div>
    :
    <PreviewExplanationText
      emailSent={emailSent}
      handleSendEmail={handleSendEmail}
      sendButton={sendButton}
    />
      }
    </div>
  )
}

export default InfoText