/* @flow */
import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { type Component } from '../../types';

export const PageWrapper = (styled(Box)({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: '40px',
}): Component);
