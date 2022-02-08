import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Quizer from './components/Quize';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoure/PublicRoute';
import {AuthContainer} from "./pages/AuthContainer";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <AuthContainer />
            </PublicRoute>
          }
        />
        <Route
          path="/quize"
          element={
            <PrivateRoute>
              <Quizer />
            </PrivateRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
