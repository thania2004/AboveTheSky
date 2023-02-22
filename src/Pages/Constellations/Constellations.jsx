import React from 'react';
import { useState, useEffect } from 'react';
import CallAxios from '../../services/CallAxios';

function Constellations() {
    const [constellation, setConstellations] = useState([]);

    function callGet(){
        CallAxios().get().then(res => {
            setConstellations(res.data);
        })
    }
    useEffect(() => {callGet()},[]);


  return (
    <div>Constellations</div>
  )
}

export default Constellations