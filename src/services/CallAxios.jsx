
import axios from 'axios';

const CallAxios = () => {
  
    const url = "http://localhost:5000/stars"

    
    const get = async () => {
        const res = await axios.get(url);
        console.log(res);
        return res;
        
    };

    return {
        get,
        url
    };
}

export default CallAxios