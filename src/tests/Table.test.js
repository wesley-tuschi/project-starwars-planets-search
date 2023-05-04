import React from 'react';
import { render, screen, within } from '@testing-library/react';
import AppProvider from '../contexts/AppProvider';
import Table from '../components/Table';
import AppContext from '../contexts/AppContext';

describe('Table component', () => {
  test('renders the table with header', () => {
    render(
      <AppProvider>
        <Table />
      </AppProvider>,
    );

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

    const header = within(table).getByRole('row', { name: /name climate created/i });
    expect(header).toBeInTheDocument();
  });
});

describe('Table component', () => {
  const planets = [
    {
      name: 'Tatooine',
      climate: 'Arid',
      created: '2014-12-09T13:50:49.641000Z',
      diameter: '10465',
      edited: '2014-12-20T20:58:18.411000Z',
      films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/'],
      gravity: '1 standard',
      orbital_period: '304',
      population: '200000',
      rotation_period: '23',
      surface_water: '1',
      terrain: 'Dessert',
      url: 'https://swapi.dev/api/planets/1/',
    },
  ];

  const mockContext = {
    planets,
    filterText: '',
    numericFilters: [],
    setFilterText: jest.fn(),
    setNumericFilters: jest.fn(),
  };

  test('renders table with planet data', () => {
    const { getByText } = render(
      <AppContext.Provider value={ mockContext }>
        <Table />
      </AppContext.Provider>,
    );

    expect(getByText('Tatooine')).toBeInTheDocument();
  });

  test('filters planet data by name', () => {
    mockContext.filterText = 'tato';

    const { getByText } = render(
      <AppContext.Provider value={ mockContext }>
        <Table />
      </AppContext.Provider>,
    );

    expect(getByText('Tatooine')).toBeInTheDocument();
  });

  test('filters planet data by numeric filters', () => {
    mockContext.numericFilters = [
      { column: 'population', comparison: 'maior que', value: 100000000 },
    ];

    const { queryByText } = render(
      <AppContext.Provider value={ mockContext }>
        <Table />
      </AppContext.Provider>,
    );

    expect(queryByText('Tatooine')).toBeNull();
  });

  test('filters planet data by multiple numeric filters', () => {
    mockContext.numericFilters = [
      { column: 'population', comparison: 'maior que', value: 100000 },
      { column: 'diameter', comparison: 'menor', value: 11000 },
    ];

    const { getByText } = render(
      <AppContext.Provider value={ mockContext }>
        <Table />
      </AppContext.Provider>,
    );

    expect(getByText('Tatooine')).toBeInTheDocument();
  });
});
