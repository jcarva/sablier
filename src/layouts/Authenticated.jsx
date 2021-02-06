/* @flow */
import { Outlet } from 'react-router-dom';
import { LayoutWrapper, ContentWrapper } from './common';
import Header from '../components/navigation/header/Header';
import Sidebar from '../components/navigation/sidebar/Sidebar';
import { type Component } from '../types';

const Authenticated = (): Component => {
  return (
    <LayoutWrapper>
      <Header />
      <Sidebar />
      <ContentWrapper pl='70px'>
        <Outlet />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Authenticated;
