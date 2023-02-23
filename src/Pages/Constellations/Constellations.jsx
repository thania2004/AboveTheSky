import React from 'react';
import { useState, useEffect } from 'react';
import CallAxios from '../../services/CallAxios';
import HomeCards from '../../Components/HomeCards/HomeCards'
import Grid from '@mui/material/Grid';
import TransparentNav from "../../Components/Header/Header";
import TransparentSimpleBottomNavigation from '../../Components/Footer/Footer';

function Constellations() {
  const [constellations, setConstellations] = useState([]);
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([])  
  

  async function callGet() {
    await CallAxios().getConstellations()
      .then(res => {
        setConstellations(res.data);
        setCards(res.data);
      })
  }
  useEffect(() => { callGet() }, []);


  return (
    <div>
      <div>
      <TransparentNav setConstellations={setConstellations} cards={cards} search={search} setSearch={setSearch}/>
      </div>
      <Grid container spacing={2} columns={16} sx={{ mx: 5 }} >
        {constellations.map(item => (
          <Grid sx={{ mt: 4 }} key={item.id}>
            <HomeCards
              Image={item.image}
              Title={item.name}
              price={item.price}
              size={item.size}
              seller={item.seller}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
      <TransparentSimpleBottomNavigation />
      </div>
  )
}

export default Constellations