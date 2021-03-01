import React, { useEffect } from 'react';
import Sidebar from "./Sidebar.jsx";
import PreviewExplanationText from "./PreviewExplanationText.jsx";

const InfoText = (props) => {

  const { handleSendEmail, preview, sendButton } = props

  useEffect(() => {
    console.log('preview in infotext', preview)

  })

  return (
    <div>
      { preview === null ?
      <Sidebar />
    :
    <PreviewExplanationText
      handleSendEmail={handleSendEmail}
      sendButton={sendButton}
    />
      }
    </div>
  )
}

export default InfoText