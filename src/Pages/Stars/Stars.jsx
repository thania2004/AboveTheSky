import React from 'react';
import { useState, useEffect } from 'react';
import CallAxios from '../../services/CallAxios';
import HomeCards from '../../Components/HomeCards/HomeCards'
import Grid from '@mui/material/Grid';

function Stars() {
    const [stars, setStars] = useState([]);

   async function callGet(){
       await CallAxios().getStars()
        .then(res => {
            setStars(res.data);
        })
    }
    useEffect(() => {callGet()},[]);


  return (
    <div>
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
        ))}
      </Grid> 
    </div>
  )
}

export default Stars