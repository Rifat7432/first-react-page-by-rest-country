import React, { useEffect, useState } from 'react';
import Country from './Country/Country';

const Countries = () => {
    const [countries,setCountries] = useState([]);
        useEffect(()=>{
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
        },[])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
             countries.map(country => <Country country={country} key = {country.cca3}></Country>)
            }
        </div>
    );
};

export default Countries;