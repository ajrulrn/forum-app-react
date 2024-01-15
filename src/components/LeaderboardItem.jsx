import React from 'react';
import PropTypes from 'prop-types';
import Card from './styled/Card';

function LeaderboardItem({ user, score, index }) {
  return (
    <Card display="flex" $justifyContent="space-between" $marginBottom="10px" $padding="10px">
      <div className="leaderboard-item__group">
        <div className="leaderboard-item__order">{index + 1}</div>
        <img src={user.avatar} alt="" className="leaderboard-item__avatar" />
        <p className="leaderboard-item__name">{user.name}</p>
      </div>
      <p className="leaderboard-item__score">{score}</p>
    </Card>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardShape,
  index: PropTypes.number.isRequired,
};

export { leaderboardShape };

export default LeaderboardItem;
