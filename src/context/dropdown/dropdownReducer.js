import { NAV_CLICK, NAV_ITEM_CLICK } from '../types';

export default (state, action) => {
  switch (action.type) {
    case NAV_CLICK:
      return {
        ...state,
        open: !state.open,
      };
    case NAV_ITEM_CLICK:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
