/* @flow */
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@material-ui/core';
import Authenticated from '../Authenticated';
import theme from '../../theme';

describe('Authenticated', () => {
  it('[snapshot]', () => {
    const tree = (
      <ThemeProvider theme={theme}>
        <Authenticated />
      </ThemeProvider>
    );
    expect(renderer.create(tree).toJSON()).toMatchSnapshot();
  });
});
