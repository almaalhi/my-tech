import { useState, useContext } from 'react';
import countryContext from '../../context/country/countryContext';

const CountrySearch = () => {
  const CountryContext = useContext(countryContext);
  const [text, setText] = useState('');

  const {
    getCountries,
    countries,
    clearCountries,
    error,
    setError,
    errorMessage,
  } = CountryContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setError('Please enter some text and try again');
    } else {
      getCountries(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
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

        {countries.length > 0 && (
          <button onClick={clearCountries} className='btn btn-light'>
            Clear
          </button>
        )}
        {error && <p className='alert'>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CountrySearch;
