import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/id';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import DislikeButton from './DislikeButton';
import LikeButton from './LikeButton';
import Card from './styled/Card';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  owner,
  toggleLike,
  toggleDislike,
  authUser = '',
}) {
  const isLikedThread = upVotesBy.includes(authUser);
  const isDislikedThread = downVotesBy.includes(authUser);

  return (
    <Card>
      <div className="thread-detail__groups">
        <div className="thread-detail__group-one">
          <img src={owner.avatar} alt="" className="thread-detail__avatar" />
          <div className="thread-detail__groups-right">
            <p className="thread-detail__account">{owner.name}</p>
            <div className="thread-detail__createdAt">
              <Moment locale="id" fromNow>{createdAt}</Moment>
            </div>
          </div>
        </div>
        <div className="thread-detail__tag">{category}</div>
      </div>
      <h2 className="thread-detail__title">{title}</h2>
      <div className="thread-detail__body">{parser(body)}</div>
      <LikeButton id={id} toggleLike={toggleLike} isLiked={isLikedThread} />
      <small className="thread-detail__count">{upVotesBy.length}</small>
      <DislikeButton id={id} toggleDislike={toggleDislike} isDisliked={isDislikedThread} />
      <small className="thread-detail__count">{downVotesBy.length}</small>
    </Card>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleDislike: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export default ThreadDetail;
