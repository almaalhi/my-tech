import './Language.css';

const Language = ({ languages }) => {
  const languageArray = [];

  for (const key in languages) {
    languageArray.push(languages[key]);
  }

  return (
    <ul className='language-list'>
      {languageArray.map((lang, ind) => (
        <li key={ind}>{lang}</li>
      ))}
    </ul>
  );
};

export default Language;
