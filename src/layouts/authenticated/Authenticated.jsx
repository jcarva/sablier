/* @flow */
import { Outlet } from 'react-router-dom';
import Header from '../../components/navigation/header/Header';
import Sidebar from '../../components/navigation/sidebar/Sidebar';
import { type Component } from '../../types';

const Authenticated = (): Component => {
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Sidebar />
      <div style={{ paddingLeft: '70px', paddingTop: '60px', height: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Authenticated;
