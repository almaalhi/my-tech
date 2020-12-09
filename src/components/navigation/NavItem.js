import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DropdownContext from '../../context/dropdown/dropdownContext';

function NavItem(props) {
  const dropdownContext = useContext(DropdownContext);

  return (
    <li className='nav-item'>
      <Link
        to={props.linkName}
        className='icon-button'
        onClick={
          props.children
            ? () => dropdownContext.navbarClick()
            : () => dropdownContext.navbarItemClick()
        }
      >
        {props.icon}
      </Link>
      {dropdownContext.open && props.children}
    </li>
  );
}

export default NavItem;
