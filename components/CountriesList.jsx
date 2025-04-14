import React, { useEffect, useState } from "react";
// import CountriesData from "../CountriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [CountriesData, setCountriesData]= useState([])
useEffect(() => {
  
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      
      });
  
}, []);
  return (
    <>
   {!CountriesData.length ? (
    <CountriesListShimmer />
   ):(
    <div className="main-container">
      {CountriesData.filter((country) =>
        country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
      ).map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            capital={country.capital?.[0]}
            region={country.region}
            population={country.population.toLocaleString("en-IN")}
            data={country}
          />
        );
      })}
    </div>
  )}
    </>
  );
}
