import React from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import FilterList from './components/FilterList';

function App() {
  return (
    <>
      <NameFilter />
      <NumericFilter />
      <FilterList />
      <Table />
    </>
  );
}

export default App;
