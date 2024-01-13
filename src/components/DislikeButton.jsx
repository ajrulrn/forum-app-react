import React from 'react';
import PropTypes from 'prop-types';
import { BsHandThumbsDown, BsHandThumbsDownFill } from 'react-icons/bs';

function DislikeButton({ id, toggleDislike, isDisliked }) {
  return (
    <button className="thread-item__button" onClick={() => toggleDislike(id)} type="button">
      {
        isDisliked ? (
          <BsHandThumbsDownFill />
        ) : (
          <BsHandThumbsDown />
        )
      }
    </button>
  );
}

DislikeButton.propTypes = {
  id: PropTypes.string.isRequired,
  toggleDislike: PropTypes.func.isRequired,
  isDisliked: PropTypes.bool.isRequired,
};

export default DislikeButton;
