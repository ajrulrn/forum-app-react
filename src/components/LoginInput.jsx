import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  return (
    <>
      <h2 className="form-title">Login</h2>
      <label htmlFor="email" className="form-label">Email</label>
      <input type="text" id="email" className="form-input" value={email} onChange={onEmailChange} />
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" id="password" className="form-input" value={password} onChange={onPasswordChange} />
      <button className="form-button" onClick={() => login({ email, password })} type="button">Login</button>
    </>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
