import { useContext } from 'react';
import countryContext from '../../context/country/countryContext';
import Language from './Language';
import './Country.css';

const Country = () => {
  const CountryContext = useContext(countryContext);

  const { clearCountry, country } = CountryContext;

  return (
    <div className='country-item'>
      <h3>{country.name.common}</h3>
      <img src={country.flags[0]} alt='flag' className='big-flag' />
      <ul className='country-ul'>
        <li>CAPITAL: {country.capital}</li>
        <li>REGION: {country.region}</li>
        <li className='language-block'>
          LANGUAGES: <Language languages={country.languages} />
        </li>
      </ul>
      <button className='btn btn-dark' onClick={clearCountry}>
        Back
      </button>
    </div>
  );
};

export default Country;
