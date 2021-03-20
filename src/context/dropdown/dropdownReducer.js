import { TOGGLE, CLOSE_DROPDOWN } from '../types';

const dropdownReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        open: !state.open,
      };
    case CLOSE_DROPDOWN:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default dropdownReducer;
