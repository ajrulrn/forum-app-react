import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardsList from '../components/LeaderboardsList';
import { asyncReceiveLeaderboardActionCreator } from '../states/leaderboards/action';

function LeaderboardPage() {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboardActionCreator());
  }, [dispatch]);

  return (
    <LeaderboardsList leaderboards={leaderboards} />
  );
}

export default LeaderboardPage;
