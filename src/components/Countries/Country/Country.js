import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flags,population,area,region} = props.country
    return ( 
          <div className="col">
           <div className="card">
            <img src={flags.png} className="card-img-top card-image img-thumbnail" alt="..."/>
             <div className="card-body">
             <h5 className="card-title">Country Name : {name.common}</h5>
             <p className="card-text">Population : {population}</p>
             <p className="card-text">Area : {area}</p>
             <p className="card-text">Region : {region}</p>
          </div>
        </div>
      </div>
    );
};

export default Country;