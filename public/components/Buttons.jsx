import React from 'react';

const Buttons = (props) => {

  return (
    <div className="grid-buttons">
    {props.previewChecked ? (
      <button
        className="button-preview"
        type="button"
        onClick={props.handlePreviewClick}
      >
        Preview
      </button>
    ) : !props.emailSent ? (
      !props.backButton ? (
        <button
          className="button-send"
          type="button"
          onClick={props.handleSendEmail}
          disabled={props.sendButton}
        >
          Send
        </button>
      ) : (
        <div className="edit-send-buttons-wrapper">
          <button
            className="edit-send-buttons"
            type="button"
            onClick={props.handleEdit}
          >
            Edit
          </button>
          <button
            className="edit-send-buttons"
            type="button"
            onClick={props.handleSendEmail}
            disabled={props.sendButton}
          >
            Send
          </button>
        </div>
      )
    ) : (
      <button type="button" className="back-button" onClick={props.handleConfirmationSent}>
        Back
      </button>
    )}
    {props.preview === null ? (
      <div className="preview-button-container">
        <div className="preview-button">
            <input
              type="checkbox"
              id="preview"
              name="preview"
              onChange={props.togglePreview}
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