import React from 'react';
import PropTypes from 'prop-types';
import { BsHandThumbsUp, BsHandThumbsUpFill } from 'react-icons/bs';

function LikeButton({ id, toggleLike, isLiked }) {
  return (
    <button className="thread-item__button" onClick={() => toggleLike(id)} type="button">
      {
        isLiked ? (
          <BsHandThumbsUpFill />
        ) : (
          <BsHandThumbsUp />
        )
      }
    </button>
  );
}

LikeButton.propTypes = {
  id: PropTypes.string.isRequired,
  toggleLike: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
};

export default LikeButton;
