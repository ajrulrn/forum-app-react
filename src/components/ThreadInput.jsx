import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import Label from './styled/Label';
import Input from './styled/Input';
import Button from './styled/Button';
import Textarea from './styled/Textarea';

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
      <Label htmlFor="title">Ttitle</Label>
      <Input type="text" id="title" value={title} onChange={onTitleChange}/>
      <Label htmlFor="body">Body</Label>
      <Textarea id="body" cols="30" rows="5" value={body} onChange={onBodyChange} />
      <Label htmlFor="category">Category <small>(optional)</small></Label>
      <Input type="text" id="category" value={category} onChange={onCategoryChange}/>
      <Button onClick={onAddThread} type="button">Save</Button>
    </>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
