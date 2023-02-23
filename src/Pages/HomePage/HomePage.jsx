import React from 'react'
import { useState, useEffect } from 'react';
import HomeCards from "../../Components/HomeCards/HomeCards";
import CallAxios from '../../services/CallAxios';
import Grid from '@mui/material/Grid';

import Box from "@mui/joy/Box";

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
    <div className='card-container'>
      <div style={{ display: 'flex', justifyContent: "space-between"}}>
        <h1 style={{ color: "white"}}>Estrellas</h1>
        <h2 style={{ color: "white"}}>Ver más</h2>
      </div>
      
      <Grid container spacing={2} columns={16}  sx={{mx:5}} >
        {stars.map(item => (
          <Grid sx={{mt:4}} key={item.id}>
            <HomeCards 
              Image={item.image}
              Title={item.name}
              price={item.price}
              size={item.size}
              description={item.description}
            />
          </Grid>
        )).splice (4)}
      </Grid>
      <div style={{ display: 'flex', justifyContent: "space-between"}}>
        <h1 style={{ color: "white"}}>Constelaciones</h1>
        <h2 style={{ color: "white"}}>Ver más</h2>
      </div>
      
      <Grid container spacing={2} columns={16}  sx={{mx:5}} >
        {constellations.map(item => (
          <Grid key={item.id}>
            <HomeCards
              Image={item.image}
              Title={item.name}
              price={item.price}
              size={item.size}
              description={item.description}
            />
          </Grid>
        )).splice (4)}
      </Grid>
    </div>
  )
}



