import React from 'react';
import { useState, useEffect } from 'react';
import CallAxios from '../../services/CallAxios';

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
    <div>{stars.map(item => (
      <div> 
        <p>{item.name}</p>
        <img src={item.image} />
      </div>
    ))}</div>
  )
}

export default Stars