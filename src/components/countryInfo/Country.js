import { useContext } from 'react';
import countryContext from '../../context/country/countryContext';

const Country = (props) => {
  const CountryContext = useContext(countryContext);

  const { clearCountry, country } = CountryContext;

  return (
    <div>
      <h3>{country.name}</h3>
      <img src={country.flag} alt='flag' className='bigFlag' />
      <ul className='countryUl'>
        <li>Capital: {country.capital}</li>
        <li>Population: {country.population}</li>
        <li>Calling Code: +{country.callingCodes[0]}</li>
        <li>
          Language: {country.languages[0].name} (Native Spelling:{'  '}
          {country.languages[0].nativeName})
        </li>
      </ul>
      <button className='btn-dark' onClick={clearCountry}>
        Back
      </button>
    </div>
  );
};

export default Country;
