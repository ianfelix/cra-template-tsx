import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome';

describe('<Welcome />', () => {
  it('renders welcome message', () => {
    render(<Welcome />);
    expect(
      screen.getByText(/Welcome to my cra-template-tsx!/i),
    ).toBeInTheDocument();
  });
});
