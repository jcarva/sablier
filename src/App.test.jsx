import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sablier', () => {
  render(<App />);
  const linkElement = screen.getByText(/sablier/i);
  expect(linkElement).toBeInTheDocument();
});
