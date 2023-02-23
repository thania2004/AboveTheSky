import React from 'react'
import { useState, useEffect } from 'react';
import HomeCards from "../../Components/HomeCards/HomeCards";
import CallAxios from '../../services/CallAxios';
import TransparentNav from "../../Components/Header/Header";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import TransparentSimpleBottomNavigation from '../../Components/Footer/Footer';

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
    <>
    <TransparentNav />
    <div className='card-container'>
      <Grid display= "flex" justifyContent="space-between" alignItems="center" spacing={2} sx={{mx:8}}>
        <h1 style={{ color: "white"}}>Estrellas</h1>
        <Link to="/Stars"><h2 style={{ color: "white"}}>Ver más</h2></Link>
      </Grid>
      
      <Grid container spacing={2} columns={16} sx={{mx:5}}>
        {stars.map(item => (
          <Grid sx={{mt:4}} key={item.id}>
            <HomeCards 
              Image={item.image}
              Title={item.name}
              price={item.price}
              size={item.size}
              seller={item.seller}
              description={item.description}
              
            />
          </Grid>
        )).splice (4)}
      </Grid> 
      <Grid display= "flex" justifyContent="space-between" alignItems="center" spacing={2} sx={{mx:8}}>
        <h1 style={{ color: "white"}}>Constelaciones</h1>
        <Link to="/Constellations"><h2 style={{ color: "white"}}>Ver más</h2></Link>
      </Grid>
      
      <Grid container spacing={2} columns={16}  sx={{mx:5}} >
        {constellations.map(item => (
          <Grid sx={{mt:4}} key={item.id}>
            <HomeCards
              Image={item.image}
              Title={item.name}
              price={item.price}
              size={item.size}
              seller={item.seller}
              description={item.description}
            />
          </Grid>
        )).splice (4)}
      </Grid>
      <div sx={{ position: 'fixed', bottom: 0, left: 0, width: '500%', zIndex: 1, paddingtop: 50 }}>
  <TransparentSimpleBottomNavigation />
</div>
    </div>
    </>
  )}