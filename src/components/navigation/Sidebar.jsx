/* @flow */
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import type { Component, Styled } from '../../types';
// import { themeGet } from "@styled-system/theme-get";

const SidebarWrapper = (styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  top: 61px;
  padding-bottom: 60px;
  bottom: 0px;
  width: 250px;
  border-right: 1px solid black;
  box-sizing: border-box;
`: Styled);

const Sidebar = (): Component => (
  <SidebarWrapper>
    <Box alignItems='center' display='flex' flexDirection='column' p={2}>
      fgggg
    </Box>
  </SidebarWrapper>
);

export default Sidebar;
