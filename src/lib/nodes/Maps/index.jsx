import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import getGoogleMapData from './conf';
const config = getGoogleMapData();

const DEFAULT_POSITION = { lat: 0, lng: 0 };
const DEFAULT_CONFIG = {
  gestureHandling: 'greedy',
  draggable: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: true
};

const Maps = compose(
  withProps({
    googleMapURL: `${config.URL.googleMaps}${config.KEY.googleKey}&v=3&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ width: '100%', height: '171px' }} />,
    containerElement: <div style={{ width: '100%', height: '171px' }} />,
    mapElement: <div style={{ width: '100%', height: '171px' }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const { position, zoom, configuration } = props;

  return (
    <GoogleMap defaultZoom={zoom} center={position} options={configuration}>
      <Marker
        position={position}
        icon="https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/map-marker.png"
        getLabel
        center
      />
    </GoogleMap>
  );
});

Maps.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  zoom: PropTypes.number,
  configuration: PropTypes.object
};

Maps.defaultProps = {
  position: DEFAULT_POSITION,
  zoom: 16,
  configuration: DEFAULT_CONFIG
};

export default Maps;
