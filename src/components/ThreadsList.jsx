import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadsList({ threads, toggleLike, toggleDislike }) {
  return (
    <section className="threads">
      {
        threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            {...thread}
            toggleLike={toggleLike}
            toggleDislike={toggleDislike}
          />
        ))
      }
    </section>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleDislike: PropTypes.func.isRequired,
};

export default ThreadsList;
