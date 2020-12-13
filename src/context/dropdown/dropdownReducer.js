import { TOGGLE_OPEN, CLOSE_OPEN } from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case CLOSE_OPEN:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
