import { useContext } from 'react';
import countryContext from '../../context/country/countryContext';

const Countries = ({ info }) => {
  const CountryContext = useContext(countryContext);

  return (
    <div className='country-list-item'>
      <div onClick={() => CountryContext.setCountry(info.alpha2Code)}>
        <img src={info.flag} alt='flag' className='flag' />
        <span className='country-name'>{info.name}</span>
      </div>
    </div>
  );
};

export default Countries;
