import axios from 'axios';

const URL = ' https://maps.googleapis.com/maps/api';

const getGeocoding = async ({ lat, lng }) => {
  try {
    const { MAP_KEY } = process.env;
    const { data } = await axios.get(`${URL}/geocode/json?latlng=${lat},${lng}&key=${MAP_KEY}`);
    return { ...data };
  } catch (err) {
    return null;
  }
};

export default getGeocoding;
