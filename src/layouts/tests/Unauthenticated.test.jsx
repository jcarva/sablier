/* @flow */
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@material-ui/core';
import Unauthenticated from '../Unauthenticated';
import theme from '../../theme';

describe('Unauthenticated', () => {
  it('[snapshot]', () => {
    const tree = (
      <ThemeProvider theme={theme}>
        <Unauthenticated />
      </ThemeProvider>
    );
    expect(renderer.create(tree).toJSON()).toMatchSnapshot();
  });
});
