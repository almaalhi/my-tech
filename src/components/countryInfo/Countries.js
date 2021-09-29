import { useContext } from 'react';
import countryContext from '../../context/country/countryContext';

const Countries = ({ info }) => {
  const CountryContext = useContext(countryContext);

  const { setCountry } = CountryContext;

  return (
    <div className='country-list-item'>
      <div onClick={() => setCountry(info.cca2)}>
        <img src={info.flags[0]} alt='flag' className='flag' />
        <span className='country-name'>{info.name.common}</span>
      </div>
    </div>
  );
};

export default Countries;
