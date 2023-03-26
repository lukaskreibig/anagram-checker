// src/components/AnagramChecker/AnagramChecker.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import { AnagramChecker } from './AnagramChecker';

test('AnagramChecker renders input fields and button', () => {
  render(<AnagramChecker />);
  const word1Input = screen.getByLabelText(/Erstes Wort/i);
  const word2Input = screen.getByLabelText(/Zweites Wort/i);
  const checkAnagramsButton = screen.getByText(/Anagramme suchen/i);
  expect(word1Input).toBeInTheDocument();
  expect(word2Input).toBeInTheDocument();
  expect(checkAnagramsButton).toBeInTheDocument();
});

test('AnagramChecker shows result after checking anagrams', () => {
  render(<AnagramChecker />);
  const word1Input = screen.getByLabelText(/Erstes Wort/i);
  const word2Input = screen.getByLabelText(/Zweites Wort/i);
  const checkAnagramsButton = screen.getByText(/Anagramme suchen/i);

  fireEvent.change(word1Input, { target: { value: 'listen' } });
  fireEvent.change(word2Input, { target: { value: 'silent' } });
  fireEvent.click(checkAnagramsButton);

  const resultElement = screen.getByText(/Anagramme gefunden./i);
  expect(resultElement).toBeInTheDocument();
});
