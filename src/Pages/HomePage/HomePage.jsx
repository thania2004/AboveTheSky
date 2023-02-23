<<<<<<< HEAD
=======
import React from 'react'
import { useState, useEffect } from 'react';
import HomeCards from "../../Components/HomeCards/HomeCards";
import CallAxios from '../../services/CallAxios';

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
      <div style={{ display: 'flex', justifyContent: "space-between"}}>
        <h1>Estrellas</h1>
        <h2>Ver más</h2>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "center"}}>
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
      <div style={{ display: 'flex', justifyContent: "space-between"}}>
        <h1>Constelaciones</h1>
        <h2>Ver más</h2>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'row', height: "500px", justifyContent: "center"}}>
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
}



>>>>>>> 48cb3f984d439f3a4b7a8032b527341ef520b386
