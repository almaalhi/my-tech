import { useReducer } from 'react';
import DropdownContext from './dropdownContext';
import DropdownReducer from './dropdownReducer';
import { TOGGLE_OPEN, CLOSE_OPEN } from '../types';

const DropdownState = (props) => {
  const initialState = {
    open: false,
  };

  const [state, dispatch] = useReducer(DropdownReducer, initialState);

  // Click Dropdown on Navbar
  const toggleOpen = () =>
    dispatch({
      type: TOGGLE_OPEN,
    });

  // Click Item in Navbar
  const closeOpen = () =>
    dispatch({
      type: CLOSE_OPEN,
    });

  return (
    <DropdownContext.Provider
      value={{
        open: state.open,
        toggleOpen,
        closeOpen,
      }}
    >
      {props.children}
    </DropdownContext.Provider>
  );
};

export default DropdownState;
