import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/id';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CommentButton from './CommentButton';
import DislikeButton from './DislikeButton';
import LikeButton from './LikeButton';
import Card from './styled/Card';

function ThreadItem({
  id,
  title,
  body,
  category,
  upVotesBy,
  downVotesBy,
  totalComments,
  createdAt,
  user,
  authUser = '',
  toggleLike,
  toggleDislike,
}) {
  const isLikedThread = upVotesBy.includes(authUser);
  const isDislikedThread = downVotesBy.includes(authUser);

  return (
    <Card>
      <div className="thread-item__groups">
        <div className="thread-item__group-one">
          <img src={user.avatar} alt="" className="thread-item__avatar" />
          <div className="thread-item__groups-right">
            <p className="thread-item__account">{user.name}</p>
            <div className="thread-item__createdAt">
              <Moment locale="id" fromNow>{createdAt}</Moment>
            </div>
          </div>
        </div>
        {
          category && <div className="thread-item__tag">{category}</div>
        }
      </div>
      <Link to={`/threads/${id}`}>
        <h2 className="thread-item__title">{title}</h2>
      </Link>
      <div className="thread-item__body">{parser(body)}</div>
      <LikeButton id={id} toggleLike={toggleLike} isLiked={isLikedThread} />
      <small className="thread-item__count">{upVotesBy.length}</small>
      <DislikeButton id={id} toggleDislike={toggleDislike} isDisliked={isDislikedThread} />
      <small className="thread-item__count">{downVotesBy.length}</small>
      <CommentButton />
      <small className="thread-item__count">{totalComments}</small>
    </Card>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleDislike: PropTypes.func.isRequired,
};

export { threadItemShape };

export default ThreadItem;
