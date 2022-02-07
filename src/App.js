import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import Quizer from './components/Quize';
import Auth from './components/Auth';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Auth />}>
        </Route>
          <Route path="/quize" element={<Quizer />}>
        </Route>
      </Routes>
     </ThemeProvider>
  );
}

export default App;
