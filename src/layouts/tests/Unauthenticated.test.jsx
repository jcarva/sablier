/* @flow */
import renderer from 'react-test-renderer';
import Unauthenticated from '../Unauthenticated';

describe('Unauthenticated', () => {
  it('[snapshot]', () => {
    expect(renderer.create(<Unauthenticated />).toJSON()).toMatchSnapshot();
  });
});
