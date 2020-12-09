import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DropdownContext from '../../context/dropdown/dropdownContext';

function DropdownItem(props) {
  const dropdownContext = useContext(DropdownContext);

  return (
    <Link
      to={props.linkName}
      className='menu-item'
      onClick={() => dropdownContext.navbarItemClick()}
    >
      {props.children}
    </Link>
  );
}

export default DropdownItem;
