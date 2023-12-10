import React from 'react';
import PropTypes from 'prop-types';
import './ChatMessage.css';

const ChatMessage = ({ message }) => {
  return (
    <div
      className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}
      style={{ backgroundColor: message.user === 'gpt' ? '#f0f0f0' : 'inherit' }}
    >
      <div className='chat-message-center'>
        <div className={`avatar ${message.user === 'gpt' && 'chatgpt'}`}>
          {message.user === 'gpt' && (
            <img src="ruta_al_avatar_gpt.png" alt="GPT Avatar" />
          )}
        </div>

        <div className='message' onClick={() => handleOnClick(message)}>
          {message.message}
        </div>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape({
    user: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatMessage;
