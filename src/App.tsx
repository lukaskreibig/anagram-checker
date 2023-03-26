import React from 'react';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import { AnagramChecker } from './components/AnagramChecker/AnagramChecker';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

/**
 * Main application component.
 * @returns {React.ReactElement} The rendered application component.
 */
const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <CssBaseline />
      <SnackbarProvider>
        <Box
          minHeight="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="background.default"
        >
          <Container maxWidth="sm">
            <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
              Anagramm Checker
            </Typography>
            <AnagramChecker />
          </Container>
        </Box>
      </SnackbarProvider>
    </>
  );
};

export default App;
