/* @flow */
import renderer from 'react-test-renderer';
import Authenticated from '../Authenticated';

describe('Authenticated', () => {
  it('[snapshot]', () => {
    expect(renderer.create(<Authenticated />).toJSON()).toMatchSnapshot();
  });
});
