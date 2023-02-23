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
}



