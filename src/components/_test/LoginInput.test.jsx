import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from '../LoginInput';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Your email');

    await userEvent.type(emailInput, 'test@gmail.com');

    expect(emailInput).toHaveValue('test@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('secret');

    await userEvent.type(passwordInput, 'testpassword');

    expect(passwordInput).toHaveValue('testpassword');
  });

  it('should call login function when login button is clicked', async () => {
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);
    
    const emailInput = await screen.getByPlaceholderText('Your email');
    await userEvent.type(emailInput, 'test@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('secret');
    await userEvent.type(passwordInput, 'testpassword');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    await userEvent.click(loginButton);

    expect(mockLogin).toBeCalledWith({
      email: 'test@gmail.com',
      password: 'testpassword',
    });
  });
});
