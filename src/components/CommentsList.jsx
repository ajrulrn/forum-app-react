import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentShape } from './CommentItem';

function CommentsList({ comments, toggleLike, toggleDislike }) {
  return (
    <div className="comments">
      {
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            {...comment}
            toggleLike={toggleLike}
            toggleDislike={toggleDislike}
          />
        ))
      }
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleDislike: PropTypes.func.isRequired,
};

export default CommentsList;
