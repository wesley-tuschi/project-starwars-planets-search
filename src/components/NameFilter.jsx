import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function NameFilter() {
  const { filterText, setFilterText } = useContext(AppContext);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filterText }
      onChange={ handleFilterChange }
      placeholder="Filtrar por nome"
    />
  );
}

export default NameFilter;
