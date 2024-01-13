import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput();
  const [body, onBodyChange] = useInput();
  const [category, onCategoryChange] = useInput();
  const navigate = useNavigate();

  function onAddThread() {
    addThread({ title, body, category });
    navigate('/');
  }

  return (
    <>
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" id="title" className="form-input" value={title} onChange={onTitleChange} />
      <label htmlFor="body" className="form-label">Body</label>
      <textarea name="" id="body" className="form-input" cols="30" rows="5" value={body} onChange={onBodyChange} />
      <label htmlFor="category" className="form-label">Category <small>(optional)</small></label>
      <input type="text" id="category" className="form-input" value={category} onChange={onCategoryChange} />
      <button className="btn-add" onClick={onAddThread} type="button">Save</button>
    </>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
