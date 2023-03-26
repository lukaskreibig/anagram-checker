// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Anagram Checker header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Anagram Checker/i);
  expect(headerElement).toBeInTheDocument();
});
