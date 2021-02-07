/* @flow */
import { ThemeProvider } from '@material-ui/core';
import Router from './routing/Router';
import theme from './theme';
import { type Component } from './types';
import './App.css';

const App = (): Component => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

export default App;
