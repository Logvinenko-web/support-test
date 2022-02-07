import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Quizer from './components/Quize';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Quizer />
    </ThemeProvider>
  );
}

export default App;
