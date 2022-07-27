import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectState } from '../features/COVID/COVID-Slice';

import '../style.css';

export default function Countries() {
  const countries = useSelector(selectState);
  const location = useLocation();
  const { name } = location.state;

  const countriesList = countries.continents.find(
    (country) => country.name === name,
  );
  console.log(countriesList);
  return (
    <div>
      <h1>countries list</h1>
      <Link to="/">Home</Link>
      <div>
        {countriesList.countries.map((country) => (
          <li key={country.id}>
            <p>{country.Country}</p>
            <p>{country.TotalCases}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

// { {countries.continents.countries.map((item) => (
//     <div key={item.id}>
//       <div>
//         <p>{item?.Country}</p>
//         {/* <p>{item.TotalCases}</p> */}
//       </div>
//     </div>
//   ))} }
