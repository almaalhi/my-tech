import { useContext } from 'react';
import countryContext from '../../context/country/countryContext';

const Country = (props) => {
  const CountryContext = useContext(countryContext);

  const { clearCountry, country } = CountryContext;

  const popString = country.population.toLocaleString('en');

  return (
    <div>
      <h3>{country.name}</h3>
      <img src={country.flag} alt='flag' className='bigFlag' />
      <ul className='countryUl'>
        <li>Capital: {country.capital}</li>
        <li>Population: {popString}</li>
        <li>Calling Code: +{country.callingCodes[0]}</li>
        <li>
          Languages: {country.languages[0].name} (Native Spelling:{'  '}
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
