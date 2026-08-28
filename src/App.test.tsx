import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o título do hero', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /elegância na ponta dos dedos/i })
  ).toBeInTheDocument();
});
