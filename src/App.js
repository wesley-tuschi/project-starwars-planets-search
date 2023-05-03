import React from 'react';
import './App.css';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <>
      <NameFilter />
      <NumericFilter />
      <Table />
    </>
  );
}

export default App;
