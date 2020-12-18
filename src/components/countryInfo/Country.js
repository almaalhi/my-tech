import axios from "axios";
import { useState } from 'react';


const Country = (props) => {
    const [text, setText] = useState('');
    const [countryList, setCountryList] = useState([])
 
    
    const getCountry = async text => {  
            const res = await axios.get(`https://restcountries.eu/rest/v2/name/${text}`); 
            setCountryList(res.data);      
    }

    return <div className='content'>
      <form>
        <input type="text" name='text' placeholder='Search Countries' value={text} onChange={e => setText(e.target.value)}/>
      </form>
    <button onClick={() => getCountry(text)}>Search</button>
    <div>{countryList.length > 0 ? countryList.map(country => (<p>{country.name}</p>)) : null}</div>
    </div>;
  }
  
  export default Country ;