import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

export let getData = async ()=>{

    try {
        let response = await axios.get(url);

        let{data:{confirmed,recovered,deaths,lastUpdate}} = response;
        return {confirmed,recovered,deaths,lastUpdate};
    }catch (error) {

    }

}