import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppProvider from '../contexts/AppProvider';
import NumericFilter from '../components/NumericFilter';

describe('NameFilter component', () => {
  test('renders the NumericFilter component', () => {
    render(
      <AppProvider>
        <NumericFilter />
      </AppProvider>,
    );
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const filterButton = screen.getByTestId('button-filter');

    expect(columnFilter).toBeInTheDocument();
    expect(comparisonFilter).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
  });

  test('adds a filter when clicking the Filter button', () => {
    render(
      <AppProvider>
        <NumericFilter />
      </AppProvider>,
    );

    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const filterButton = screen.getByTestId('button-filter');

    userEvent.selectOptions(columnFilter, 'population');
    userEvent.selectOptions(comparisonFilter, 'maior que');
    fireEvent.change(valueFilter, { target: { value: '100000' } });
    fireEvent.click(filterButton);
  });
});
