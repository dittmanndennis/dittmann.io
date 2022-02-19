import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Stack spacing={8} direction="column" alignItems="center">
            <Stack spacing={2} direction="row">
              <Button variant="contained" color="info" href="mailto: dennis@dittmann.io"><EmailIcon/></Button>
              <p>dennis@dittmann.io</p>
            </Stack>

            <Stack spacing={4} direction="row">
              <Button variant="contained" color="LinkedIn" size="large" href="https://www.linkedin.com/in/dennisdittmann/"><LinkedInIcon/></Button>
              <Button variant="contained" color="GitHub" size="large" href="https://github.com/dittmanndennis"><GitHubIcon/></Button>
            </Stack>
          </Stack>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
