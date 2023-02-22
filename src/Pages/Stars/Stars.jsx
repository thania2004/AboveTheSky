import React from 'react';
import { useState, useEffect } from 'react';
import CallAxios from '../../services/CallAxios';

function Stars() {
    const [constellation, setConstellations] = useState([]);

   async function callGet(){
       await CallAxios().get()
        .then(res => {
            setConstellations(res.data);
        })
    }
    useEffect(() => {callGet()},[]);


  return (
    <div>{constellation.map(item => (
      <div> 
        <p>{item.name}</p>
        <img src={item.image} />
      </div>
    ))}</div>
  )
}

export default Stars