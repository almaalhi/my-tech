import Countries from './Countries';
import Country from './Country';

import countryContext from '../../context/country/countryContext';
import { useState, useContext } from 'react';

const CountrySearch = () => {
  const CountryContext = useContext(countryContext);
  const [text, setText] = useState('');

  const { getCountries, countries, clearCountries, country } = CountryContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      console.log('Please Enter Something');
    } else {
      getCountries(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  const countryList = countries.map((country, ind) => (
    <Countries info={country} key={ind} />
  ));

  return (
    <div>
      <div className='search'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Enter Country Name'
            value={text}
            onChange={onChange}
          />
          <input type='submit' value='Search' className='btn btn-dark' />

          {countries.length > 0 ? (
            <button onClick={clearCountries} className='btn btn-light'>
              Clear
            </button>
          ) : null}
        </form>
      </div>
      <div className='search country-list'>
        {countries.length > 0 && country.length === 0 ? (
          countryList
        ) : country.length !== 0 ? (
          <Country />
        ) : null}
      </div>
    </div>
  );
};

export default CountrySearch;
