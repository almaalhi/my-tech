import { useReducer } from 'react';
import CountryContext from './countryContext';
import CountryReducer from './countryReducer';
import axios from 'axios';
import {
  GET_COUNTRIES,
  CLEAR_COUNTRIES,
  SET_COUNTRY,
  CLEAR_COUNTRY,
  SET_LOADING,
} from '../types';

const CountryState = (props) => {
  const initialState = {
    countries: [],
    country: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);

  // Get list of countries
  const getCountries = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${text}`
    );
    dispatch({
      type: GET_COUNTRIES,
      payload: res.data,
    });
  };

  // Clear list of countries
  const clearCountries = () => {
    dispatch({ type: CLEAR_COUNTRIES });
  };

  // Set content to one specific country
  const setCountry = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${text}`
    );
    dispatch({
      type: SET_COUNTRY,
      payload: res.data,
    });
  };

  const clearCountry = () => {
    dispatch({ type: CLEAR_COUNTRY });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        country: state.country,
        getCountries,
        clearCountries,
        setCountry,
        clearCountry,
        setLoading,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
