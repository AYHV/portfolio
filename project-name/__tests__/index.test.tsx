import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('hello world!', () => {
	render(<App />);
	const linkElement = screen.getByText(/hello world/i);
	expect(linkElement).toBeInTheDocument();
});