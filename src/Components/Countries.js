import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectState } from '../features/COVID/COVID-Slice';

import '../style.css';

export default function Countries() {
  // get the country list depend on the pass continent name
  const countries = useSelector(selectState);
  const location = useLocation();
  const { name } = location.state;
  const countriesList = countries.continents.find(
    (country) => country.name === name,
  );
  // ********************************* //

  const [filter, setFilter] = useState('');
  const [foundCountry, setFoundCountry] = useState(countriesList.countries);

  const filterFunc = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const result = countriesList.countries
        .filter((country) => country.Country.toLowerCase().startsWith(keyword.toLowerCase()));
      setFoundCountry(result);
    } else {
      setFoundCountry(countriesList.countries);
    }
    setFilter(keyword);
  };

  return (
    <div>
      <h1>countries list</h1>
      <Link to="/">Home</Link>
      <input
        type="search"
        placeholder="search"
        id="filter"
        value={filter}
        onChange={filterFunc}
      />
      <div>
        {foundCountry?.map((country) => (
          <ul key={country?.id}>
            <li>
              <p>{country?.Country}</p>
              <p>{country?.TotalCases}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
