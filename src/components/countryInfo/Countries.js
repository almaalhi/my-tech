import axios from 'axios';
import { useState } from 'react';

const Countries = (props) => {
  const [text, setText] = useState('');
  const [countryList, setCountryList] = useState([]);

  const getCountryList = async (text) => {
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${text}`
    );
    setCountryList(res.data);
    setText('');
  };

  const clearCountryList = () => {
    setCountryList([]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      console.log('Please Enter Something');
    } else {
      getCountryList(text);
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className='content'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Enter Country Name'
          value={text}
          onChange={onChange}
        />
        <input type='submit' value='Search' />
      </form>
      {countryList.length > 0 && (
        <button onClick={clearCountryList}>Clear</button>
      )}
      <div>
        {countryList.length > 0
          ? countryList.map((country) => (
              <div>
                <p>{country.name}</p>{' '}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Countries;
