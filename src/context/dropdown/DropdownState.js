import { useReducer } from 'react';
import DropdownContext from './dropdownContext';
import DropdownReducer from './dropdownReducer';
import { NAV_CLICK, NAV_ITEM_CLICK } from '../types';

const DropdownState = (props) => {
  const initialState = {
    open: false,
  };

  const [state, dispatch] = useReducer(DropdownReducer, initialState);

  // Click Dropdown on Navbar
  const navbarClick = () =>
    dispatch({
      type: NAV_CLICK,
      payload: state.open,
    });

  // Click Item in Navbar
  const navbarItemClick = () =>
    dispatch({
      type: NAV_ITEM_CLICK,
    });

  return (
    <DropdownContext.Provider
      value={{
        open: state.open,
        navbarClick,
        navbarItemClick,
      }}
    >
      {props.children}
    </DropdownContext.Provider>
  );
};

export default DropdownState;
