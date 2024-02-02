import './App.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const theme = createTheme({
  palette: {
    LinkedIn: {
      main: '#0e76a8',
    },
    GitHub: {
      main: '#171515',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Stack spacing={8} direction="column" alignItems="center">
            <Stack spacing={2} direction="row">
              <Button variant="contained" color="info" href="mailto: dennis@dittmann.io"><EmailIcon /></Button>
              <p>dennis@dittmann.io</p>
            </Stack>

            <Stack spacing={4} direction="row">
              <Button variant="contained" color="LinkedIn" size="large" href="https://www.linkedin.com/in/dennisdittmann/"><LinkedInIcon /></Button>
              <Button variant="contained" color="GitHub" size="large" href="https://github.com/dittmanndennis"><GitHubIcon /></Button>
            </Stack>
          </Stack>
        </header>
        <footer className="App-footer">
          <p color="white">Dennis Dittmann <CopyrightIcon fontSize="small" /> 2024</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
