import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const URL = 'https://swapi.dev/api/planets';

  useEffect(() => {
    const reqAPI = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      const deleteResidents = data.results.map((e) => {
        const { residents, ...dataBase } = e;
        return dataBase;
      });
      setPlanets(deleteResidents);
    };
    reqAPI();
  }, []);

  const values = useMemo(() => ({
    planets, setPlanets,
  }), [planets, setPlanets]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
