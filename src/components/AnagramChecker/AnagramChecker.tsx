import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import { areAnagrams } from '../../utils/anagramChecker/anagramChecker';

/**
 * AnagramChecker component.
 * @returns {React.ReactElement} The rendered AnagramChecker component.
 */
export const AnagramChecker: React.FC = () => {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [result, setResult] = useState<string | null>(null);

  /**
   * Handles form submission.
   * @param {React.FormEvent} event - The form submission event.
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (word1 !== '' && word2 !== '') {
      setResult(areAnagrams(word1, word2) ? 'Anagramme gefunden!' : 'Keine Übereinstimmung.');
    } else {
      setResult('Beide Felder müssen ausgefüllt werden.');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Box component="form" onSubmit={handleSubmit} textAlign="center">
        <Box mb={2}>
          <TextField
            label="Erstes Wort"
            variant="outlined"
            value={word1}
            onChange={(e) => setWord1(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Zweites Wort"
            variant="outlined"
            value={word2}
            onChange={(e) => setWord2(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <Button type="submit" variant="contained">
            Anagramme suchen
          </Button>
        </Box>
        {result && (
          <Typography variant="subtitle1" component="div">
            {result}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};
