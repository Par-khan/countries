import React from 'react';
import './CountriesListShimmer.css';

export default function CountriesListShimmer() {

    // new Array(10).fill('')

    const mapped=Array.from({length:12}).map((el,i)=>{
       return <div key={i} style={{ backgroundColor: '#ccc' }} className="container-content Shimmer-card"></div>
    })

  return (
    <>
    <div className="main-container">
     {mapped}
    </div>
   
    </>
  );
}