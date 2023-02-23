import React from 'react'
import { useState, useEffect } from 'react';
import HomeCards from "../../Components/HomeCards/HomeCards";
import data from "../../Products/Products.json"

export default function HomePage() {

  console.log(data);

  // const [constellations, setConstellations] = useState([]);
  // const [stars, setStars] = useState([]);

  // useEffect(() => {
  //   axios.get(url)
  //     .then(response => {
  //       setConstellations(response.data.constellations);
  //       setStars(response.data.stars);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);


  return (
    <div>
      <h1>Constelaciones</h1>
      <ul>
      {data.constellations.map(constellation => (
          <li key={constellation.id}>
            <HomeCards image={constellation.image} Title={constellation.name} Paragraph={constellation.description}/>
            {/* <h2>{constellation.name}</h2>
            <p>{constellation.description}</p>
            <img src={constellation.image} alt={constellation.name} />
            <p>Precio: {constellation.price}</p>
            <p>Vendedor: {constellation.seller}</p> */}
          </li>
        ))}
      </ul>
      <h1>Estrellas</h1>
      <ul>
      {data.stars.map(star => (
          <li key={star.id}>
            <h2>{star.name}</h2>
            <p>{star.description}</p>
            <img src={star.image} alt={star.name} />
            <p>Precio: {star.price}</p>
            <p>Tamaño: {star.size}</p>
            <p>Vendedor: {star.seller}</p>
          </li>
        ))}
      </ul>
    </div>
  );



}



