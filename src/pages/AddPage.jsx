import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';
import Section from '../components/styled/Section';

function AddPage() {
  const dispatch = useDispatch();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <Section>
      <Link to="/" className="button-back">
        <div>
          <GoArrowLeft /> Back
        </div>
      </Link>
      <ThreadInput addThread={onAddThread} />
    </Section>
  );
}

export default AddPage;
