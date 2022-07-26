import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountriesAsync, selectCountries } from './COVID-Slice';

import styles from './Counter.module.css';

export function Countries() {
  const countries = useSelector(selectCountries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesAsync());
  }, []);

  const handleClick = () => {
    console.log('meeeeeeeeee')
  }

  return (
    <div>
      <h1>countries list</h1>
      {countries.value.map((item,index) => {
        return (
          <div key={index}>
            <div onClick={()=>handleClick()} className={styles.countryDiv}>
              <p>{item.Country}</p>
              <p>{item.TotalCases}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
