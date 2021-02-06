/* @flow */
import { Outlet } from 'react-router-dom';
import { LayoutWrapper, ContentWrapper } from './common';
import Header from '../components/navigation/header/Header';
import { type Component } from '../types';

const Unauthenticated = (): Component => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Unauthenticated;
