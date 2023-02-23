
import axios from 'axios';

const CallAxios = () => {
  
    const url = "http://localhost:5000"

    
    const getStars = async () => {
        const res = await axios.get(`${url}/stars`);
        return res; 
    };

     
    const getConstellations = async () => {
        const res = await axios.get(`${url}/constellations`);
        return res; 
    };

    return {
        getStars,
        getConstellations,
        url
    };
}

export default CallAxios