/* @flow */
import { AppBar, Toolbar } from '@material-ui/core';
import type { Component } from '../../types';

const Header = (): Component => (
  <AppBar>
    <Toolbar>
      <p>Sablier</p>
    </Toolbar>
  </AppBar>
);

export default Header;
