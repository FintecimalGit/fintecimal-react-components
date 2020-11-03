import axios from 'axios';

const URL = 'https://maps.googleapis.com/maps/api';
const MAP_KEY = process && process.env && process.env.MAP_KEY || "AIzaSyA3C5AilsVhn6xNYDJ73B0eKJwBNFe2RNc";
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const isLocal = window.location.hostname === 'localhost';

const getAddress = async ({ value }) => {
  try {
    if (!value) return [];
    let url = `${URL}/place/autocomplete/json?input=${value}&types=geocode&components=country:MX&language=es-419&key=${MAP_KEY}`;
    if (isLocal) {
      url = PROXY_URL + url;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};

export {
  getAddress
};
