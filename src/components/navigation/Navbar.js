import { Fragment } from 'react';

function Navbar(props) {
  return (
    <Fragment>
      <nav className='navbar'>
        <ul className='navbar-nav'> {props.children} </ul>
      </nav>
    </Fragment>
  );
}

export default Navbar;
