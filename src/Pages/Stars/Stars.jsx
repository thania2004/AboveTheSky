import React from 'react';
import { useState, useEffect } from 'react';
import CallAxios from '../../services/CallAxios';
import HomeCards from '../../Components/HomeCards/HomeCards'
import Grid from '@mui/material/Grid';
import TransparentNav from "../../Components/Header/Header";

function Stars() {

  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([])  
  const [stars, setStars] = useState([]);

  async function callGet() {
    await CallAxios().getStars()
      .then(res => {
        setStars(res.data);
        setCards(res.data);
      })
  }
  useEffect(() => { callGet() }, []);


  return (
    <div>
      <div>
      <TransparentNav setStars={setStars} search={search} setSearch={setSearch} cards={cards}/>
      </div>
      <Grid container spacing={2} columns={16} sx={{ mx: 5 }}>
        {stars.map(item => (
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
    </div>
  )
}

export default Stars