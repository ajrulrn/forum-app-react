import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdAdd } from 'react-icons/io';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateThreads } from '../states/shared/action';
import { asyncToggleDislikeThread, asyncToggleLikeThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

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
    <section className="home-page">
      {
        authUser && <Link to="/new" className="btn-add">Add Thread <IoMdAdd /></Link>
      }
      <ThreadsList threads={threadList} toggleLike={onToggleLike} toggleDislike={onToggleDislike} />
    </section>
  );
}

export default HomePage;
