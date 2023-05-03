import { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';

function NumericFilter() {
  const { numericFilters, setNumericFilters } = useContext(AppContext);
  const [valueFilter, setValueFilter] = useState('0');

  const handleNumericFilter = () => {
    const column = document.querySelector('[data-testid="column-filter"]').value;
    const comparison = document.querySelector('[data-testid="comparison-filter"]').value;
    const value = Number(document.querySelector('[data-testid="value-filter"]').value);

    setNumericFilters([...numericFilters, { column, comparison, value }]);
  };

  const getAvailableColumns = () => {
    const allColumns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    const usedColumns = numericFilters.map((filter) => filter.column);

    return allColumns.filter((column) => !usedColumns.includes(column));
  };

  const availableColumns = getAvailableColumns();

  return (
    <div>
      <select data-testid="column-filter">
        {availableColumns.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>
      <select data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor">menor que</option>
        <option value="igual">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ (e) => setValueFilter(e.target.value) }
        placeholder="Valor numérico"
      />
      <button data-testid="button-filter" onClick={ handleNumericFilter }>
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilter;
