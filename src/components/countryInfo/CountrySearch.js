import { useState, useContext } from "react";
import countryContext from "../../context/country/countryContext";

const CountrySearch = () => {
  const CountryContext = useContext(countryContext);
  const [text, setText] = useState("");

  const { getCountries, countries, clearCountries, error } = CountryContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      console.log("Please Enter Something");
    } else {
      getCountries(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Enter Country Name"
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="Search" className="btn btn-dark" />

        {countries.length > 0 ? (
          <button onClick={clearCountries} className="btn btn-light">
            Clear
          </button>
        ) : null}
        {error && (
          <h3 className="alert">No country found, please try again.</h3>
        )}
      </form>
    </div>
  );
};

export default CountrySearch;
