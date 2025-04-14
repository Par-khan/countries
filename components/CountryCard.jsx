import React from 'react'
import { Link } from 'react-router'

export default function CountryCard({name,flag,capital,region,population,data}) {
  return (
<Link className="container-content" to={`${name}`} state={{data}} >
  <img src={flag} alt="" />
  <div className="country-data">
    <h3 className="title">{name}</h3>
    <p>
      <b>Population:</b>{population}
    </p>
    <p>
      <b>Region:</b>{region}
    </p>
    <p>
      <b>Capital:</b>{capital}
    </p>
  </div>
</Link>
  )
}
