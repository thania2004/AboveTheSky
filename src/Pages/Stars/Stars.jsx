import React from 'react';
import { useState, useEffect } from 'react';
import CallAxios from '../../services/CallAxios';
import HomeCards from '../../Components/HomeCards/HomeCards'

function Stars() {
    const [constellation, setConstellations] = useState([]);

   async function callGet(){
       await CallAxios().getStars()
        .then(res => {
            setConstellations(res.data);
        })
    }
    useEffect(() => {callGet()},[]);


  return (
    <div>{constellation.map(item => (
      <div key={item.id}>
        <HomeCards
        Image={item.image}
        Title={item.name}
        price={item.price}
        size={item.size}
        description={item.description}/> 
        
      </div>
    ))}</div>
  )
}

export default Stars