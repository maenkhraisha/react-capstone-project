import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectState } from '../features/COVID/COVID-Slice';

const ContinentsPage = () => {
  const data = useSelector(selectState);
  const asia = data.continents.find((country) => country.name === 'asia');
  const africa = data.continents.find((country) => country.name === 'africa');
  const northAmerica = data.continents.find(
    (country) => country.name === 'northamerica',
  );
  const southAmerica = data.continents.find(
    (country) => country.name === 'southamerica',
  );
  const europe = data.continents.find((country) => country.name === 'europe');
  const australia = data.continents.find(
    (country) => country.name === 'australia',
  );

  return (
    <div>
      <h1>continents page</h1>

      <Link to="/countries" state={{ name: 'asia' }}>
        <div>
          <h1>Asia</h1>
          <p>{asia?.totalCases}</p>
        </div>
      </Link>

      <Link to="/countries" state={{ name: 'northamerica' }}>
        <div>
          <h1>North America</h1>
          <p>{northAmerica?.totalCases}</p>
        </div>
      </Link>
      <Link to="/countries" state={{ name: 'southamerica' }}>
        <div>
          <h1>South America</h1>
          <p>{southAmerica?.totalCases}</p>
        </div>
      </Link>
      <Link to="/countries" state={{ name: 'africa' }}>
        <div>
          <h1>Africa</h1>
          <p>{africa?.totalCases}</p>
        </div>
      </Link>
      <Link to="/countries" state={{ name: 'europe' }}>
        <div>
          <h1>Europe</h1>
          <p>{europe?.totalCases}</p>
        </div>
      </Link>
      <Link to="/countries" state={{ name: 'australia' }}>
        <div>
          <h1>Australia</h1>
          <p>{australia?.totalCases}</p>
        </div>
      </Link>
    </div>
  );
};
export default ContinentsPage;
