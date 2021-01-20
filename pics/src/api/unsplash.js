import axios from 'axios';

export default axios.create({                //allow to make heading
        baseURL: 'https://api.unsplash.com/search/photos',
        headers:{
        Authorization:
         'Client-ID DCi_gHO2f_G1ahBxWdMTYbey19TTaY3DN_7Z08zSkiQ'
     }
});