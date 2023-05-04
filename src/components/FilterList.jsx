import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function FilterList() {
  const { numericFilters, setNumericFilters } = useContext(AppContext);

  const removeFilter = (index) => {
    setNumericFilters((prevFilters) => prevFilters.filter((i, i2) => i2 !== index));
  };

  const removeAllFilters = () => {
    setNumericFilters([]);
  };

  return (
    <div>
      {numericFilters.map((filter, index) => (
        <div key={ index } data-testid="filter">
          <span>{filter.column}</span>
          <span>{filter.comparison}</span>
          <span>{filter.value}</span>
          <button onClick={ () => removeFilter(index) }>🗑️</button>
        </div>
      ))}
      <button
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
        disabled={ numericFilters.length === 0 }
      >
        Remover filtros
      </button>
    </div>
  );
}

export default FilterList;
