import { Fragment } from 'react';
import CountrySearch from '../countryInfo/CountrySearch';
import CountryResult from '../countryInfo/CountryResult';

function CountryApp(props) {
  return (
    <Fragment>
      <CountrySearch />
      <CountryResult />
    </Fragment>
  );
}

export default CountryApp;
