import axios from "axios";
import { useEffect, useState } from 'react';

const getCountry = () => {
    axios.get('https://restcountries.eu/rest/v2/name/united')
    .then((res) => {
        res.data.forEach((result) => console.log(result.name) )
       
    //   res.data.name;
    })
    .catch((err) => {
        console.error(err)
    })
}

const Country = (props) => {
    const [countryList, setCountryList] = useState('');

    useEffect(() => {
      setCountryList(getCountry());
      
    }, [])

    return <div className='content'>{countryList}
    </div>;
  }
  
  export default Country ;