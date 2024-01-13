import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardShape } from './LeaderboardItem';

function LeaderboardsList({ leaderboards }) {
  return (
    <section className="leaderboards">
      <h2 className="leaderboards__title">Leaderboards</h2>
      {
        leaderboards.map((leaderboard, index) => (
          <LeaderboardItem key={leaderboard.user.id} {...leaderboard} index={index} />
        ))
      }
    </section>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardShape)).isRequired,
};

export default LeaderboardsList;
