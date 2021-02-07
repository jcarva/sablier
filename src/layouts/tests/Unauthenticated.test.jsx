/* @flow */
import { render } from '@testing-library/react';
import Unauthenticated from '../Unauthenticated';

describe('Unauthenticated', () => {
  it('[snapshot]', () => {
    const { container } = render(<Unauthenticated />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
