const Timezones = (props) => {
  if (props.timezones.length === 1) {
    return <li>TIMEZONE: {props.timezones[0]} </li>;
  } else if (props.timezones.length > 1) {
    return (
      <li>
        TIMEZONES:{' '}
        <ul>
          {props.timezones.map((timezone, ind) => (
            <li key={ind}>{timezone} </li>
          ))}{' '}
        </ul>
      </li>
    );
  }
};

export default Timezones;
