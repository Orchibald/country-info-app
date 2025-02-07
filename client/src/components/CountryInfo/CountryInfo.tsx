import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryInfo } from '../../services/api';
import PopulationChart from '../PopulationChart/PopulationChart';
import { FaHome } from 'react-icons/fa';
import Loader from '../Loader/Loader';
import './CountryInfo.css';

interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

interface CountryInfo {
  flagUrl: string;
  borders: Border[];
  population: { year: number; value: number }[];
}

const CountryInfo = () => {
  const { code } = useParams<{ code: string }>();
  const [country, setCountry] = useState<CountryInfo | null>(null);

  useEffect(() => {
    getCountryInfo(code!).then(setCountry).catch(console.error);
  }, [code]);

  if (!country) return <Loader />;

  return (
    <div className="country-info-container">
      <img src={country.flagUrl} alt={`Flag`} width={150} />
      <h2>Bordering Countries</h2>
      <ul>
        {country.borders.map((border) => (
          <li key={border.countryCode}>
            <Link to={`/country/${border.countryCode}`}>{border.commonName}</Link>
          </li>
        ))}
      </ul>

      <h2>Population Over Time</h2>
      <div>
        <PopulationChart data={country.population} />
      </div>
      <Link to='/'>
        <h1 className='home-link'>
          <FaHome size={52} color='#2c3e50'/>
        </h1>
      </Link>
    </div>
  );
};

export default CountryInfo;
