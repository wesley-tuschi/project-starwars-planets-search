import { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import Loading from './Loading';

function Table() {
  const { planets, filterText, numericFilters } = useContext(AppContext);

  if (planets.length === 0) {
    return <Loading />;
  }

  const applyNumericFilters = (planet) => numericFilters.every((filter) => {
    const planetValue = Number(planet[filter.column]);

    switch (filter.comparison) {
    case 'maior que':
      return planetValue > filter.value;
    case 'menor':
      return planetValue < filter.value;
    case 'igual':
      return planetValue === filter.value;
    default:
      return false;
    }
  });

  const filteredPlanets = planets.filter((planet) => (
    planet.name.toLowerCase().includes(filterText.toLowerCase())
    && applyNumericFilters(planet)
  ));

  return (
    <div
      className="container table-responsive"
    >
      <table className="table table-dark table-striped table-hover table-borderless">
        <thead className="text-warning">
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Orbital_period</th>
            <th>Population</th>
            <th>Rotation_period</th>
            <th>Surface_water</th>
            <th>Terrain</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody className="text-light">
          {filteredPlanets.map((e) => (
            <tr key={ e.url }>
              <td>{e.name}</td>
              <td>{e.climate}</td>
              <td>{e.created}</td>
              <td>{e.diameter}</td>
              <td>{e.edited}</td>
              <td>{e.films}</td>
              <td>{e.gravity}</td>
              <td>{e.orbital_period}</td>
              <td>{e.population}</td>
              <td>{e.rotation_period}</td>
              <td>{e.surface_water}</td>
              <td>{e.terrain}</td>
              <td>{e.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
