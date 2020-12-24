import { useReducer } from 'react';
import DropdownContext from './dropdownContext';
import DropdownReducer from './dropdownReducer';
import { TOGGLE_OPEN, CLOSE_OPEN } from '../types';

const DropdownState = (props) => {
  const initialState = {
    open: false,
  };

  const [state, dispatch] = useReducer(DropdownReducer, initialState);

  // Toggle Dropdown
  const toggleOpen = () =>
    dispatch({
      type: TOGGLE_OPEN,
    });

  // Close Dropdown
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
