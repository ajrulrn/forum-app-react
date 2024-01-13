import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  return (
    <>
      <h2 className="form-title">Register</h2>
      <label htmlFor="name" className="form-label">Name</label>
      <input
        type="text"
        id="name"
        className="form-input"
        value={name}
        onChange={onNameChange}
      />
      <label htmlFor="email" className="form-label">Email</label>
      <input
        type="email"
        id="email"
        className="form-input"
        value={email}
        onChange={onEmailChange}
      />
      <label htmlFor="password" className="form-label">Password</label>
      <input
        type="password"
        id="password"
        className="form-input"
        value={password}
        onChange={onPasswordChange}
      />
      <button className="form-button" onClick={() => register({ name, email, password })} type="button">Register</button>
    </>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
