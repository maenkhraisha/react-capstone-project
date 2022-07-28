import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import ContinentsPage from './Pages/ContinentsPage';
import CountriesPage from './Pages/CountriesPage';

import { fetchContinentsAsync } from './features/COVID/COVID-Slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContinentsAsync('africa'));
    dispatch(fetchContinentsAsync('asia'));
    dispatch(fetchContinentsAsync('europe'));
    dispatch(fetchContinentsAsync('northamerica'));
    dispatch(fetchContinentsAsync('southamerica'));
    dispatch(fetchContinentsAsync('australia'));
  }, []);

  return (
    <div className="App">
      <Provider>
        <Router>
          <Routes>
            <Route path="/" element={<ContinentsPage />} />
            <Route path="/continents" element={<ContinentsPage />} />
            <Route path="/countries" element={<CountriesPage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
