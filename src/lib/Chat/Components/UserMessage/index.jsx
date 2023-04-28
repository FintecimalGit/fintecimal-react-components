import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';

export const UserMessage = ({ message }) => {
  const classes = useStyles();
  return (
    <p className={classes.container}>{ message }</p>
  )
};

UserMessage.propTypes = {
  message: PropTypes.string,
};

UserMessage.defaultProps = {
  message: '',
};
