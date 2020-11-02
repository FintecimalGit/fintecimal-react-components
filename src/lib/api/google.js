import axios from 'axios';

const URL = 'https://maps.googleapis.com/maps/api';
const MAP_KEY = process && process.env && process.env.MAP_KEY || "AIzaSyA3C5AilsVhn6xNYDJ73B0eKJwBNFe2RNc";


const getAddress = async ({ value }) => {
  try {
    if(!value) return [];
    const { data } = await axios.get(`${URL}/place/autocomplete/json?input=${value}&types=geocode&components=country:MX&language=es-419&key=${MAP_KEY}`);
    return data;
  } catch (err) {
    return null;
  }
};

export {
  getAddress
};
