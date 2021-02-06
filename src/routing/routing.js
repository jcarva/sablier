/* eslint-disable react/jsx-filename-extension */
import { Navigate } from 'react-router-dom';
import { Authenticated, Unauthenticated } from '../layouts';
import { About, Login, NotFound, Settings, Tasks } from '../pages';

const paths = {
  root: '/',
  app: '/app',
  settings: '/settings',
  profile: '/profile',
  login: '/login',
  about: '/about',
  statistics: '/statistics',
  unauthorized: '/unauthorized',
  notFound: '/404',
  all: '/*',
};

const routes = [
  {
    path: paths.root,
    element: <Unauthenticated />,
    children: [
      { path: paths.root, element: <Navigate to={paths.app} /> },
      { path: paths.login, element: <Login /> },
      { path: paths.about, element: <About /> },
      { path: paths.notFound, element: <NotFound /> },
      { path: paths.all, element: <Navigate to={paths.notFound} /> },
    ],
  },
  {
    path: paths.app,
    element: <Authenticated />,
    children: [
      { path: paths.root, element: <Tasks /> },
      { path: paths.settings, element: <Settings /> },
      { path: paths.all, element: <Navigate to={paths.notFound} /> },
    ],
  },
];

export default routes;
