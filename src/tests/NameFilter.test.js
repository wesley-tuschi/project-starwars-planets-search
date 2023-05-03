import React, { useContext } from 'react';
import { render, fireEvent,
  renderHook, waitFor } from '@testing-library/react';
import AppProvider from '../contexts/AppProvider';
import NameFilter from '../components/NameFilter';
import AppContext from '../contexts/AppContext';

describe('NameFilter component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <AppProvider>
        <NameFilter />
      </AppProvider>,
    );
    const inputElement = getByTestId('name-filter');
    expect(inputElement).toBeInTheDocument();
  });

  test('updates filterText state when input value changes', () => {
    const { getByTestId } = render(
      <AppProvider>
        <NameFilter />
      </AppProvider>,
    );
    const inputElement = getByTestId('name-filter');
    fireEvent.change(inputElement, { target: { value: 'Alderaan' } });
    expect(inputElement.value).toBe('Alderaan');
  });
});

describe('AppProvider', () => {
  it('should provide initial state and context methods', async () => {
    const wrapper = ({ children }) => <AppProvider>{children}</AppProvider>;
    const { result } = renderHook(() => useContext(AppContext), { wrapper });

    expect(result.current.filterText).toBe('');
    expect(result.current.numericFilters).toEqual([]);

    await waitFor(
      () => expect(result.current.planets.length).toBeGreaterThan(0),
      { timeout: 5000 },
    );

    expect(result.current.planets.length).toBeGreaterThan(0);
    expect(result.current.setPlanets).toBeInstanceOf(Function);
    expect(result.current.setFilterText).toBeInstanceOf(Function);
    expect(result.current.setNumericFilters).toBeInstanceOf(Function);
  });
});
