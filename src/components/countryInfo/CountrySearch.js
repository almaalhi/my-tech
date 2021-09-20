import { useState, useContext } from 'react';
import countryContext from '../../context/country/countryContext';
import DropdownContext from '../../context/dropdown/dropdownContext';

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

  const dropdownContext = useContext(DropdownContext);
  const { closeDropdown } = dropdownContext;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      setError('Please enter some text and try again');
      closeDropdown();
    } else {
      getCountries(text);
      setText('');
      closeDropdown();
    }
  };

  const clearCountriesHandler = () => {
    clearCountries();
    closeDropdown();
  };

  const onChangeHandler = (e) => setText(e.target.value);

  return (
    <div className='search'>
      <form onSubmit={onSubmitHandler}>
        <input
          type='text'
          name='text'
          placeholder='Enter Country Name'
          value={text}
          onChange={onChangeHandler}
        />
        <input type='submit' value='Search' className='btn btn-dark' />

        {countries.length > 0 && (
          <button onClick={clearCountriesHandler} className='btn btn-light'>
            Clear
          </button>
        )}
        {error && <p className='alert'>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CountrySearch;
