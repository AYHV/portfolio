import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../../components/ui/Button';

describe('Button Component', () => {
    test('renders button with text', () => {
        render(<Button text="Click Me" />);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('button is disabled when prop is passed', () => {
        render(<Button text="Click Me" disabled />);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeDisabled();
    });
});