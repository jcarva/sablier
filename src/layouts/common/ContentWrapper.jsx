/* @flow */
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { type Component } from '../../types';

export const ContentWrapper = (withTheme(styled(Box)`
  display: flex;
  flex: 1 1 auto;
  padding-top: ${(props) => props.theme.componentDimensions.header.width};
  overflow: hidden;
`): Component);
