import { useContext } from 'react';
import countryContext from '../../context/country/countryContext';
import Language from './Language';
import Timezones from './Timezones';

const Country = () => {
  const CountryContext = useContext(countryContext);

  const { clearCountry, country } = CountryContext;

  const popString = country.population.toLocaleString('en');

  return (
    <div className='country-item'>
      <h3>{country.name}</h3>
      <img src={country.flag} alt='flag' className='big-flag' />
      <ul className='country-ul'>
        <li>CAPITAL: {country.capital}</li>
        <li>POPULATION: {popString}</li>
        <li>CALLING CODE: +{country.callingCodes[0]}</li>
        <Language languages={country.languages} />
        <Timezones timezones={country.timezones} />
      </ul>
      <button className='btn btn-dark' onClick={clearCountry}>
        Back
      </button>
    </div>
  );
};

export default Country;
