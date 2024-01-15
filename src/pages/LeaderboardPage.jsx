import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardsList from '../components/LeaderboardsList';
import { asyncReceiveLeaderboardActionCreator } from '../states/leaderboards/action';
import Section from '../components/styled/Section';

function LeaderboardPage() {
  const leaderboards = useSelector((states) => states.leaderboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboardActionCreator());
  }, [dispatch]);

  return (
    <Section>
      <LeaderboardsList leaderboards={leaderboards} />
    </Section>
  );
}

export default LeaderboardPage;
