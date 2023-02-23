import React from 'react'
import { useState, useEffect } from 'react';
import HomeCards from "../../Components/HomeCards/HomeCards";
import CallAxios from '../../services/CallAxios';
// import data from "../../Products/Products.json"

export default function HomePage() {

  const [stars, setStars] = useState([]);

  async function callGetStars() {
    await CallAxios().getStars()
      .then(res => {
        setStars(res.data);
      })
  }
  useEffect(() => { callGetStars() }, []);

  const [constellations, setConstellations] = useState([]);

  async function callGetConstellations() {
    await CallAxios().getConstellations()
      .then(res => {
        setConstellations(res.data);
      })
  }
  useEffect(() => { callGetConstellations() }, []);



  return (
    <div>
      <h1>Estrellas</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {stars.map(item => (
          <div key={item.id}>
            <HomeCards
              Image={item.image}
              Title={item.name}
              price={item.price}
              size={item.size}
              description={item.description}
            />
          </div>
        )).splice (4)}
      </div>
      <h1>Constelaciones</h1>
      <div style={{ display: 'flex', flexDirection: 'row', height: "500px" }}>
        {constellations.map(item => (
          <div key={item.id}>
            <HomeCards
              Image={item.image}
              Title={item.name}
              price={item.price}
              size={item.size}
              description={item.description}
            />
          </div>
        )).splice (4)}
      </div>
    </div>
  )





  // return (
  //   <div>
  //     <h1>Constelaciones</h1>
  //     <ul>
  //     {constellations.map(constellation => (
  //         <li key={constellation.id}>
  //           <HomeCards image={constellation.image} Title={constellation.name} Paragraph={constellation.description}/>
  //           {/* <h2>{constellation.name}</h2>
  //           <p>{constellation.description}</p>
  //           <img src={constellation.image} alt={constellation.name} />
  //           <p>Precio: {constellation.price}</p>
  //           <p>Vendedor: {constellation.seller}</p> */}
  //         </li>
  //       ))}
  //     </ul>
  //     <h1>Estrellas</h1>
  //     <ul>
  //     {stars.map(star => (
  //         <li key={star.id}>
  //           <h2>{star.name}</h2>
  //           <p>{star.description}</p>
  //           <img src={star.image} alt={star.name}/>
  //           <p>Precio: {star.price}</p>
  //           <p>Tamaño: {star.size}</p>
  //           <p>Vendedor: {star.seller}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );



}



