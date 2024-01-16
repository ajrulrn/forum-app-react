/**
 * testing scenario
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from '../LoginInput';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Your email');

    // action
    await userEvent.type(emailInput, 'test@gmail.com');

    // assert
    expect(emailInput).toHaveValue('test@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('secret');

    // action
    await userEvent.type(passwordInput, 'testpassword');

    // assert
    expect(passwordInput).toHaveValue('testpassword');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Your email');
    await userEvent.type(emailInput, 'test@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('secret');
    await userEvent.type(passwordInput, 'testpassword');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'test@gmail.com',
      password: 'testpassword',
    });
  });
});
