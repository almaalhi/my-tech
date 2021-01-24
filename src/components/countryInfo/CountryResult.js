import { useContext } from 'react';
import countryContext from '../../context/country/countryContext';

import Country from './Country';
import Countries from './Countries';

const CountryResult = () => {
  const CountryContext = useContext(countryContext);

  const { countries, country } = CountryContext;

  const countryList = countries.map((country, ind) => (
    <Countries info={country} key={ind} />
  ));

  return (
    <div className='search country-list'>
      {countries.length > 0 && country.length === 0 ? (
        countryList
      ) : country.length !== 0 ? (
        <Country />
      ) : null}
    </div>
  );
};

export default CountryResult;
