
import axios from 'axios';

const CallAxios = () => {
  
    const url = "http://localhost:5000"

    
    const getStars = async () => {
        const res = await axios.get(`${url}/stars`);
        console.log(res);
        return res; 
    };

     
    const getConstellations = async () => {
        const res = await axios.get(`${url}/constellations`);
        console.log(res);
        return res; 
    };

    return {
        getStars,
        getConstellations,
        url
    };
}

export default CallAxios