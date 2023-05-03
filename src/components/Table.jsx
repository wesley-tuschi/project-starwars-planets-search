import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function Table() {
  const { planets, filterText } = useContext(AppContext);
  const filteredPlanets = planets.filter((planet) => (
    planet.name.toLowerCase().includes(filterText.toLowerCase())
  ));

  return (
    <table>
      <thead>
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
      <tbody>
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
  );
}

export default Table;
