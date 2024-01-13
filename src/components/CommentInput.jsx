import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdSend } from 'react-icons/io';

function CommentInput({ reply }) {
  const [content, setContent] = useState('');

  function onReply() {
    reply(content);
    setContent('');
  }

  function onContentChange({ target }) {
    setContent(target.value);
  }

  return (
    <div className="comment-input">
      <input
        type="text"
        className="comment-input__text"
        placeholder="balas..."
        onChange={onContentChange}
        value={content}
      />
      <button className="comment-input__button" onClick={onReply} aria-label="reply" type="button">
        <IoMdSend />
      </button>
    </div>
  );
}

CommentInput.propTypes = {
  reply: PropTypes.func.isRequired,
};

export default CommentInput;
