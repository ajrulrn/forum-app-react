import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Input from './styled/Input';
import Button from './styled/Button';
import Label from './styled/Label';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  return (
    <>
      <h2 className="form-title">Register</h2>
      <Label htmlFor="name">Name</Label>
      <Input type="text" id="name" value={name} onChange={onNameChange} placeholder="Your name" />
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" value={email} onChange={onEmailChange} placeholder="Your email" />
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" value={password} onChange={onPasswordChange} placeholder="Secret" />
      <Button onClick={() => register({ name, email, password })} type="button">Register</Button>
    </>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
