/**
 * testing scenario
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from '../RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Your name');

    // action
    await userEvent.type(nameInput, 'Test User');

    // assert
    expect(nameInput).toHaveValue('Test User');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Your email');

    // action
    await userEvent.type(emailInput, 'test@gmail.com');

    // assert
    expect(emailInput).toHaveValue('test@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Secret');

    // action
    await userEvent.type(passwordInput, 'testpassword');

    // assert
    expect(passwordInput).toHaveValue('testpassword');
  });

  it('should call register function when register button is clicked', async () => {
    // arrange
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Your name');
    await userEvent.type(nameInput, 'Test User');
    const emailInput = await screen.getByPlaceholderText('Your email');
    await userEvent.type(emailInput, 'test@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Secret');
    await userEvent.type(passwordInput, 'testpassword');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // action
    await userEvent.click(registerButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      name: 'Test User',
      email: 'test@gmail.com',
      password: 'testpassword',
    });
  });
});
