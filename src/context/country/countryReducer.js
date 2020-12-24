import {
  GET_COUNTRIES,
  CLEAR_COUNTRIES,
  SET_COUNTRY,
  CLEAR_COUNTRY,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        country: [],
        loading: false,
      };
    case CLEAR_COUNTRIES:
      return {
        ...state,
        countries: [],
        country: [],
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
        loading: false,
      };
    case CLEAR_COUNTRY:
      return {
        ...state,
        country: [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
