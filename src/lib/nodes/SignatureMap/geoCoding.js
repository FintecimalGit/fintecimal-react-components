import axios from 'axios';

const URL = ' https://maps.googleapis.com/maps/api';

const getGeocoding = async ({ lat, lng }) => {
  try {
    const { data } = await axios.get(
      `${URL}/geocode/json?latlng=${lat},${lng}&key=AIzaSyA3C5AilsVhn6xNYDJ73B0eKJwBNFe2RNc`
    );
    return { ...data };
  } catch (err) {
    return null;
  }
};

export default getGeocoding;
