import React from 'react';

function Card({ img, title, country, googleMapsLink, text, dates }) {
  return (
    <div className='card'>
      <img className='main-image' src={img.src} alt={img.alt} />
      <div>
        <span>{country}</span>
        <a href={googleMapsLink}>View on Google Maps</a>
        <h2>{title}</h2>
        <br />
        <p><b>{dates}</b></p>
        <br />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
