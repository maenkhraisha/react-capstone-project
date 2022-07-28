import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegSun, FaMicrophone } from 'react-icons/fa';

import worldMap from '../map/world.svg';
import asiaMap from '../map/asia.svg';
import africaMap from '../map/africa.svg';
import southAmericaMap from '../map/south-america.svg';
import northAmericaMap from '../map/north-america.svg';
import australiaMap from '../map/australia.svg';
import europeMap from '../map/europe.svg';

import { selectState } from '../features/COVID/COVID-Slice';

import './styleContinents.css';

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

  let worldTotalCases = 0;
  if (asia && africa && northAmerica && southAmerica && europe && australia) {
    worldTotalCases = asia.totalCases + africa.totalCases + northAmerica.totalCases
    + southAmerica.totalCases + europe.totalCases + australia.totalCases;
  }

  return (
    <div className="container">
      <div className="continent-header">
        <p>COVID Watcher</p>
        <div className="header-right-icon">
          <FaMicrophone fontSize="1.25em" />
          <FaRegSun fontSize="1.25em" />
        </div>
      </div>
      <div className="world-container">
        <img className="world-map" src={worldMap} alt="world map" />
        <div className="world-totalcases">
          <p className="continent-item-name">WORLD</p>
          <p className="continent-item-number">{worldTotalCases}</p>
        </div>
      </div>
      <div className="status-bar">STATUS BY CONTINENT</div>
      <div className="continent-container">
        <div className="asia">
          <Link to="/countries" state={{ name: 'asia' }}>
            <div className="continent-item">
              <img className="continent-map" src={asiaMap} alt="asia map" />
              <div>
                <p className="continent-item-name">Asia</p>
                <p className="continent-item-number">{asia?.totalCases}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="n-america">
          <Link to="/countries" state={{ name: 'northamerica' }}>
            <div className="continent-item">
              <img
                className="continent-map"
                src={northAmericaMap}
                alt="north america map"
              />
              <div>
                <p className="continent-item-name">North America</p>
                <p className="continent-item-number">{northAmerica?.totalCases}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="s-america">
          <Link to="/countries" state={{ name: 'southamerica' }}>
            <div className="continent-item">
              <img
                className="continent-map"
                src={southAmericaMap}
                alt="aouth america map"
              />
              <div>
                <p className="continent-item-name">South America</p>
                <p className="continent-item-number">{southAmerica?.totalCases}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="africa">
          <Link to="/countries" state={{ name: 'africa' }}>
            <div className="continent-item">
              <img className="continent-map" src={africaMap} alt="africa map" />
              <div>
                <p className="continent-item-name">Africa</p>
                <p className="continent-item-number">{africa?.totalCases}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="europe">
          <Link to="/countries" state={{ name: 'europe' }}>
            <div className="continent-item">
              <img className="continent-map" src={europeMap} alt="europe map" />
              <div>
                <p className="continent-item-name">Europe</p>
                <p className="continent-item-number">{europe?.totalCases}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="australia">
          <Link to="/countries" state={{ name: 'australia' }}>
            <div className="continent-item">
              <img
                className="continent-map"
                src={australiaMap}
                alt="australia map"
              />
              <div>
                <p className="continent-item-name">Australia</p>
                <p className="continent-item-number">{australia?.totalCases}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ContinentsPage;
