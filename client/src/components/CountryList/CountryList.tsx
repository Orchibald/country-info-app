import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAvailableCountries } from '../../services/api';
import { Country } from '../../types/types';
import './CountryList.css';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [totalCountries, setTotalCountries] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);

  useEffect(() => {
    getAvailableCountries(page, limit)
      .then((data) => {
        setCountries(data.countries);
        setTotalCountries(data.total);
      })
      .catch(console.error);

  }, [page, limit]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="country-list-container">
      <h1>Available Countries</h1>

      {countries.length ? (
        <ul>
          {countries.map((country) => (
            <li key={country.countryCode}>
              <Link to={`/country/${country.countryCode}`}>{country.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}

      <Pagination
        currentPage={page}
        totalItems={totalCountries}
        itemsPerPage={limit}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CountryList;
