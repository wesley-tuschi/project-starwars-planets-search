import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import AppProvider from '../contexts/AppProvider';

describe('App component', () => {
  test('should render all components', () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>,
    );

    expect(screen.getByTestId('name-filter')).toBeInTheDocument();

    expect(screen.getByTestId('numeric-filter')).toBeInTheDocument();

    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
