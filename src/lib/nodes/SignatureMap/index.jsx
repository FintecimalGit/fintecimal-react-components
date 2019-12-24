import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Maps } from '../index';
import getGeocoding from './geoCoding';

import HeaderCard from '../../HeaderCard';

import useStyles from './style';

const DEFAULT_LOCATION = { lat: 20.694292, lng: -103.375275 };

const firstUpperCase = string => string.charAt(0).toUpperCase() + string.slice(1);

const buildFormatDate = date => {
  if (date === '') {
    return date;
  }
  const localDate = moment(new Date(date));
  localDate.locale('es');
  const formatDate = localDate.format('dddd DD/MM/YYYY');
  const [day, ...rest] = formatDate.split(' ');
  const [info] = rest;
  const newDate = `${firstUpperCase(day)}, ${info}`;
  return newDate;
};

const SignatureMap = ({ location, title, date }) => {
  const classes = useStyles();
  const [locationName, setLocationName] = useState('');

  const getStreetName = street => {
    const [name = ''] = street.split(',');
    return name;
  };

  const fetchLocation = async () => {
    const data = await getGeocoding(location);
    const { results = [] } = data || {};
    const [address = {}] = results;
    // eslint-disable-next-line camelcase
    const { formatted_address = '' } = address;
    const name = getStreetName(formatted_address);
    setLocationName(name);
  };

  useEffect(() => {
    fetchLocation();
  }, [location]);

  const formatDate = buildFormatDate(date);
  return (
    <HeaderCard title={title}>
      <div className={classes.container}>
        <Maps position={location} />
        <div className={classes.footer}>
          <div>
            <span>Ubicación:</span>
            <span>{locationName}</span>
          </div>
          <div >
            <span>Fecha:</span>
            <span>{formatDate}</span>
          </div>
        </div>
      </div>
    </HeaderCard>
  );
};

SignatureMap.propTypes = {
  title: PropTypes.string,
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
};

SignatureMap.defaultProps = {
  title: 'Ubicación de video',
  location: DEFAULT_LOCATION,
  date: new Date()
};

export default SignatureMap;
