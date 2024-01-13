import React from 'react';
import { FiUser } from 'react-icons/fi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const {
    authUser,
  } = useSelector((states) => states);
  const location = useLocation();

  return (
    <section className="navbar">
      <div className="menus">
        <Link
          to="/"
          className={location.pathname === '/' ? 'menus__button active' : 'menus__button'}
        >
          <VscCommentDiscussion />
        </Link>
        <Link
          to="/leaderboard"
          className={location.pathname === '/leaderboard' ? 'menus__button active' : 'menus__button'}
        >
          <MdOutlineLeaderboard />
        </Link>
        <Link
          to={authUser ? '/profile' : '/login'}
          className={location.pathname === '/profile' ? 'menus__button active' : 'menus__button'}
        >
          <FiUser />
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
