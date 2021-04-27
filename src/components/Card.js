import React from "react";

const Card = (props) => {
  const { country } = props;

  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  console.log(country);
  return (
    <li className="card">
      <img src={country.flag} alt="flag" />
      <div className="data-container">
        <ul>
          <li>Pays : {country.name}</li>
          <li>Capital : {country.capital}</li>
          <li>Poulation : {numberFormat(country.population)} habitants</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
