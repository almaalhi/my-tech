const Language = (props) => {
  if (props.languages.length === 1) {
    return (
      <li>
        LANGUAGE: {props.languages[0].name}{' '}
        {props.languages[0].nativeName !== props.languages[0].name
          ? `(${props.languages[0].nativeName})`
          : null}
      </li>
    );
  } else if (props.languages.length > 1) {
    return (
      <li>
        LANGUAGES:{' '}
        <ul>
          {props.languages.map((language, ind) => (
            <li key={ind}>
              {language.name}{' '}
              {language.nativeName !== language.name
                ? `(${language.nativeName})`
                : null}
            </li>
          ))}{' '}
        </ul>
      </li>
    );
  }
};

export default Language;
