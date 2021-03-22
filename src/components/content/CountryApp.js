import { Fragment } from 'react';
import CountrySearch from '../countryInfo/CountrySearch';
import CountryResult from '../countryInfo/CountryResult';

const CountryApp = () => {
  return (
    <Fragment>
      <CountrySearch />
      <CountryResult />
    </Fragment>
  );
};

export default CountryApp;
