
const getGoogleMapData = () => {
  try {
    return {
      URL: {
        googleMaps: 'https://maps.googleapis.com/maps/api/js?key='
      },
      KEY: {
        googleKey: process && process.env && process.env.MAP_KEY ? process.env.MAP_KEY : 'AIzaSyA3C5AilsVhn6xNYDJ73B0eKJwBNFe2RNc'
      }
    }
  } catch(e) {
    return {
      URL: {
        googleMaps: 'https://maps.googleapis.com/maps/api/js?key='
      },
      KEY: {
        googleKey: 'AIzaSyA3C5AilsVhn6xNYDJ73B0eKJwBNFe2RNc'
      }
    }
  }
};

export default getGoogleMapData;
