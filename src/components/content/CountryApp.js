import { Fragment } from 'react';
import CountrySearch from '../countryInfo/CountrySearch';
import Countries from '../countryInfo/CountrySearch';

function CountryApp(props) {
  return (
    <Fragment>
      <CountrySearch />
      <Countries />
    </Fragment>
  );
}

export default CountryApp;
