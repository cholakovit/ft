import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Message from './';

describe('Message Component', () => {
  it('should display an error message in red', () => {
    render(<Message message="Error occurred" type="error" />);
    const messageElement = screen.getByText("Error occurred");
    // Check style directly
    expect(messageElement.style.color).toBe('red');
  });

  it('should display a success message in green', () => {
    render(<Message message="Operation successful" type="success" />);
    const messageElement = screen.getByText("Operation successful");
    // Check style directly
    expect(messageElement.style.color).toBe('green');
  });
});