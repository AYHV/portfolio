import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../path/to/HelloWorld'; // Adjust the import path as necessary

test('renders hello world text', () => {
    render(<HelloWorld />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
});