import React from 'react'
import './CountriesListShimmer.css'
export default function CountriesDetailShimmer() {
  return (
    <div className="country-details-container shimmer">
    <span className="back-button shimmer-block"></span>
    <div className="country-details">
      <div className="shimmer-flag shimmer-block"></div>
      <div className="details-text-container">
        <div className="shimmer-title shimmer-block"></div>
        <div className="details-text">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div className="shimmer-line shimmer-block" key={idx}></div>
          ))}
          <div className="border-countries">
            <div className="shimmer-border shimmer-block"></div>
            <div className="shimmer-border shimmer-block"></div>
            <div className="shimmer-border shimmer-block"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
