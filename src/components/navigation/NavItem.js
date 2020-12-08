import { Link } from 'react-router-dom';

function NavItem(props) {
  return (
    <li className='nav-item'>
      <Link to={props.linkName} className='icon-button'>
        {props.icon}
      </Link>
    </li>
  );
}

export default NavItem;
