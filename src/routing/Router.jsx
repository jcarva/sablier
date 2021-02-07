/* @flow */
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './index';
import { type Component } from '../types';

const Routes = (): Component => useRoutes(routes);

const Router = (): Component => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
