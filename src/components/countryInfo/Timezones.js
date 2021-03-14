const Timezones = (props) => {
  if (props.timezones.length === 1) {
    return <li>Timezone: {props.timezones[0]} </li>;
  } else if (props.timezones.length > 1) {
    return (
      <li>
        Timezones:{" "}
        <ul>
          {props.timezones.map((timezone, ind) => (
            <li key={ind}>{timezone} </li>
          ))}{" "}
        </ul>
      </li>
    );
  }
};

export default Timezones;
