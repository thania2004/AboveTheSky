import React from 'react';
import { useState, useEffect } from 'react';
import CallAxios from '../../services/CallAxios';
import HomeCards from '../../Components/HomeCards/HomeCards'

function Constellations() {
    const [constellations, setConstellations] = useState([]);

   async function callGet(){
       await CallAxios().getConstellations()
        .then(res => {
            setConstellations(res.data);
        })
    }
    useEffect(() => {callGet()},[]);


  return (
    <div>{constellations.map(item => (
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

export default Constellations