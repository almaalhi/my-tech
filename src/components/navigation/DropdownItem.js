import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DropdownContext from '../../context/dropdown/dropdownContext';
import CountryContext from '../../context/country/countryContext';

function DropdownItem(props) {
  const dropdownContext = useContext(DropdownContext);
  const { closeOpen } = dropdownContext;

  const countryContext = useContext(CountryContext);
  const { clearCountries } = countryContext;

  const onClick = () => {
    closeOpen();
    clearCountries();
  };

  return (
    <Link to={props.linkName} className='menu-item' onClick={onClick}>
      {props.children}
    </Link>
  );
}

export default DropdownItem;
