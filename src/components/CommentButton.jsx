import React from 'react';
import { FaRegComment } from 'react-icons/fa';

function CommentButton() {
  return (
    <button className="thread-item__button" type="button" aria-label="comment">
      <FaRegComment />
    </button>
  );
}

export default CommentButton;
