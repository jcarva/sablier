/* @flow */
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { LayoutWrapper, ContentWrapper } from './common';
import Header from '../components/navigation/Header';
import Sidebar from '../components/navigation/Sidebar';
import type { Component, Styled } from '../types';

export const StyledContentWrapper = (styled(ContentWrapper)`
  padding-top: ${themeGet('componentDimensions.header.height')};
`: Styled);

const Authenticated = (): Component => {
  return (
    <LayoutWrapper>
      <Header />
      <Sidebar />
      <StyledContentWrapper>
        <Outlet />
      </StyledContentWrapper>
    </LayoutWrapper>
  );
};

export default Authenticated;
