import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Input from './styled/Input';
import Button from './styled/Button';
import Label from './styled/Label';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  return (
    <>
      <h2 className="form-title">Login</h2>
      <Label htmlFor="email">Email</Label>
      <Input type="text" id="email" value={email} onChange={onEmailChange} placeholder="Your email" />
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" value={password} onChange={onPasswordChange} placeholder="secret" />
      <Button onClick={() => login({ email, password })} type="button">Login</Button>
    </>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
