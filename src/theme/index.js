/* @flow */
import { createMuiTheme } from '@material-ui/core';

const componentDimensions = {
  header: { height: '60px' },
  sidebar: { width: '60px' },
  footer: { height: '60px' },
};

const theme = (createMuiTheme({
  componentDimensions,
}): Object);

export default theme;
