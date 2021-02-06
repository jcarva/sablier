/* @flow */
import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { type Component } from '../../types';

export const ContentWrapper = (styled(Box)({
  display: 'flex',
  flex: '1 1 auto',
  paddingTop: '60px',
  overflow: 'hidden',
}): Component);
