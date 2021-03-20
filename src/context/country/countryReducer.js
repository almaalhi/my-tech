import {
  GET_COUNTRIES,
  CLEAR_COUNTRIES,
  SET_COUNTRY,
  CLEAR_COUNTRY,
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
} from '../types';

const countryReducer = (state, action) => {
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
    case SET_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false,
        countries: [],
        country: [],
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: false,
      };

    default:
      throw Error(`Unhandled Action: ${action.type}`);
  }
};

export default countryReducer;
