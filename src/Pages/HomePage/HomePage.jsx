import React from 'react'
import { useState, useEffect } from 'react';
import HomeCards from "../../Components/HomeCards/HomeCards";
import CallAxios from '../../services/CallAxios';
import TransparentNav from "../../Components/Header/Header";

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
      <div>
        <TransparentNav/>
      </div>
      <div className='card-container'>
        <div style={{ display: 'flex', justifyContent: "space-between"}}>
          <h1 style={{ color: "white"}}>Estrellas</h1>
          <h2 style={{ color: "white"}}>Ver más</h2>
        </div>
        
        <div className="each-card-container" style={{ display: 'flex', flexDirection: 'row', justifyContent: "center"}}>
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
          <h1 style={{ color: "white"}}>Constelaciones</h1>
          <h2 style={{ color: "white"}}>Ver más</h2>
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
    </div>
  )}