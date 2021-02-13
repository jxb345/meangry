import React from 'react';

const Buttons = (props) => {

  const { props } = { backButton, emailSent, handleEdit, handleSendEmail, preview, previewChecked, sendButton, togglePreview,  }

  const handleConfirmationSent = () => {
    setPreview(null);
    setPreviewChecked(true);
    setBody("");
    setEmailSent(false);
    setBackButton(false);
    setSendButton("disabled");
  };


  const handlePreviewClick = () => {
    setPreview(true);
    setPreviewChecked(false);
    setBackButton(true);
  };

  const togglePreview = () => {
    setPreviewChecked(!previewChecked);
  };


  return (
    <div className="grid-buttons">
    {previewChecked ? (
      <button
        className="button-preview"
        type="button"
        onClick={handlePreviewClick}
      >
        Preview
      </button>
    ) : !emailSent ? (
      !backButton ? (
        <button
          className="button-send"
          type="button"
          onClick={handleSendEmail}
          disabled={sendButton}
        >
          Send
        </button>
      ) : (
        <div className="edit-send-buttons-wrapper">
          <button
            className="edit-send-buttons"
            type="button"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="edit-send-buttons"
            type="button"
            onClick={handleSendEmail}
            disabled={sendButton}
          >
            Send
          </button>
        </div>
      )
    ) : (
      <button type="button" className="back-button" onClick={handleConfirmationSent}>
        Back
      </button>
    )}
    {preview === null ? (
      <div className="preview-button-container">
        <div className="preview-button">
            <input
              type="checkbox"
              id="preview"
              name="preview"
              onChange={togglePreview}
              defaultChecked
              />
            <label htmlFor="preview">
              &nbsp;&nbsp;preview before sending email
            </label>
          </div>
      </div>
    ) : (
      <p></p>
    )}
  </div>
    )
}

export default Buttons