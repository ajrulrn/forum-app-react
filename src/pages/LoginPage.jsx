import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import Section from '../components/styled/Section';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <Section>
      <LoginInput login={onLogin} />
      <small>No have an account ? <Link to="/register">Register</Link></small>
    </Section>
  );
}

export default LoginPage;
