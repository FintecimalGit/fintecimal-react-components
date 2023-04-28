import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';

export const ApiMessage = ({ message }) => {
  const classes = useStyles();
  return (
    <p className={classes.container}>{ message }</p>
  )
};

ApiMessage.propTypes = {
  message: PropTypes.string,
};

ApiMessage.defaultProps = {
  message: '',
};
