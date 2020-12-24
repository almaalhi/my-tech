import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DropdownContext from '../../context/dropdown/dropdownContext';
import CountryContext from '../../context/country/countryContext';

function NavItem(props) {
  const dropdownContext = useContext(DropdownContext);
  const { toggleOpen, closeOpen } = dropdownContext;

  const countryContext = useContext(CountryContext);
  const { clearCountries } = countryContext;

  const clickHome = () => {
    closeOpen();
    clearCountries();
  };

  const clickDropdownIten = () => {
    toggleOpen();
  };

  return (
    <li className='nav-item'>
      <Link
        to={props.linkName}
        className='icon-button'
        onClick={props.children ? clickDropdownIten : clickHome}
      >
        {props.icon}
      </Link>
      {dropdownContext.open && props.children}
    </li>
  );
}

export default NavItem;
