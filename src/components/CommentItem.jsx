import React from 'react';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import DislikeButton from './DislikeButton';
import LikeButton from './LikeButton';
import 'moment/locale/id';
import Card from './styled/Card';

function CommentItem({
  id,
  content,
  owner,
  createdAt,
  upVotesBy,
  downVotesBy,
  toggleLike,
  toggleDislike,
  authUser = '',
}) {
  const isLikedComment = upVotesBy.includes(authUser);
  const isDislikedComment = downVotesBy.includes(authUser);

  return (
    <Card>
      <div className="comment-item__group">
        <img src={owner.avatar} alt="" className="comment-item__avatar" />
        <div className="comment-item__group-one">
          <div className="comment-item__name">{owner.name}</div>
          <div className="comment-item__createdAt">
            <Moment locale="id" fromNow>{createdAt}</Moment>
          </div>
        </div>
      </div>
      <div className="comment-item__content">{parser(content)}</div>
      <LikeButton id={id} toggleLike={toggleLike} isLiked={isLikedComment} />
      <small className="comment-item__count">{upVotesBy.length}</small>
      <DislikeButton id={id} toggleDislike={toggleDislike} isDisliked={isDislikedComment} />
      <small className="comment-item__count">{downVotesBy.length}</small>
    </Card>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  toggleLike: PropTypes.func.isRequired,
  toggleDislike: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export { commentShape };

export default CommentItem;
