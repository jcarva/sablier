/* @flow */
import { Outlet } from 'react-router-dom';
import { LayoutWrapper, ContentWrapper } from './common';
import type { Component } from '../types';

const Unauthenticated = (): Component => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Unauthenticated;
