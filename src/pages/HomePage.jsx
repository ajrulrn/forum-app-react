import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdAdd } from 'react-icons/io';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateThreads } from '../states/shared/action';
import { asyncToggleDislikeThread, asyncToggleLikeThread } from '../states/threads/action';
import Section from '../components/styled/Section';

function HomePage() {
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);
  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThreads());
  }, [dispatch]);

  const onToggleLike = (threadId) => {
    dispatch(asyncToggleLikeThread(threadId));
  };

  const onToggleDislike = (threadId) => {
    dispatch(asyncToggleDislikeThread(threadId));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser ? authUser.id : null,
  }));

  return (
    <Section>
      {
        authUser && <Link to="/new" className="btn-add">Add Thread <IoMdAdd /></Link>
      }
      <ThreadsList threads={threadList} toggleLike={onToggleLike} toggleDislike={onToggleDislike} />
    </Section>
  );
}

export default HomePage;
