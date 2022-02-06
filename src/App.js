import * as React from 'react';
import ReactDOM from 'react-dom';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Quizer from './components/Quize'
const theme = createTheme({});

function App() {
  return <ThemeProvider theme={theme}><Quizer /></ThemeProvider>;
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App