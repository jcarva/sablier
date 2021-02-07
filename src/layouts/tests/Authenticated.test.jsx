/* @flow */
import { render } from '@testing-library/react';
import Authenticated from '../Authenticated';

describe('Authenticated', () => {
  it('[snapshot]', () => {
    const { container } = render(<Authenticated />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
