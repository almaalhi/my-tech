import { useReducer } from 'react';
import DropdownContext from './dropdownContext';
import DropdownReducer from './dropdownReducer';
import { TOGGLE, CLOSE_DROPDOWN } from '../types';

const DropdownProvider = (props) => {
  const initialState = {
    open: false,
  };

  const [state, dispatch] = useReducer(DropdownReducer, initialState);

  // Toggle Dropdown
  const toggle = () =>
    dispatch({
      type: TOGGLE,
    });

  // Close Dropdown
  const closeDropdown = () =>
    dispatch({
      type: CLOSE_DROPDOWN,
    });

  return (
    <DropdownContext.Provider
      value={{
        open: state.open,
        toggle,
        closeDropdown,
      }}
    >
      {props.children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
