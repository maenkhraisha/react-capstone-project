import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FaRegSun, FaMicrophone, FaAngleLeft } from 'react-icons/fa';
import { selectState } from '../features/COVID/COVID-Slice';

import './styleCountries.css';
import asiaMap from '../assets/map/asia.svg';
import africaMap from '../assets/map/africa.svg';
import southamericaMap from '../assets/map/south-america.svg';
import northamericaMap from '../assets/map/north-america.svg';
import australiaMap from '../assets/map/australia.svg';
import europeMap from '../assets/map/europe.svg';

export default function Countries() {
  // get the country list depend on the pass continent name
  const countries = useSelector(selectState);
  const location = useLocation();
  const { name } = location.state;
  let map = '';

  if (name === 'asia') map = asiaMap;
  else if (name === 'africa') map = africaMap;
  else if (name === 'southamerica') map = southamericaMap;
  else if (name === 'northamerica') map = northamericaMap;
  else if (name === 'australia') map = australiaMap;
  else if (name === 'europe') map = europeMap;

  const countriesList = countries.continents.find(
    (country) => country.name === name,
  );
  // ********************************* //

  const [filter, setFilter] = useState('');
  const [foundCountry, setFoundCountry] = useState(countriesList?.countries);
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
    <div className="countries-container">
      <div className="countries-header">
        <Link to="/">
          <FaAngleLeft color="white" fontSize="1.5em" />
        </Link>
        <input
          type="search"
          placeholder="search / country"
          id="filter"
          value={filter}
          onChange={filterFunc}
        />
        <div className="header-right-icon">
          <FaMicrophone fontSize="1.25em" />
          <FaRegSun fontSize="1.25em" />
        </div>
      </div>
      <div className="map-container">
        <img src={map} alt="continent map" />
      </div>
      <div className="country-status-bar">COUNTRY LIST BREACKDOWN</div>
      <div className="country-list-item">
        <ul>
          {foundCountry?.map((country) => (
            <li className="country-item" key={country?.id}>
              <p className="country-name">{country?.Country}</p>
              <p className="country-total-cases">{country?.TotalCases}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
