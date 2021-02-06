/* @flow */
import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { type Component } from '../../types';

export const LayoutWrapper = (styled(Box)({
  display: 'flex',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
}): Component);
