import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  longText: {
    alignSelf: 'stretch',
    color: 'gray',
    fontSize: 11,
    textAlign: 'justify',
    marginBottom: 0
  }
}));

const LongPlaceHolder = ({ text }) => {
  const classes = useStyles();
  return <p className={classes.longText}>{text}</p>;
};

LongPlaceHolder.propTypes = {
  text: PropTypes.string.isRequired
};

export default LongPlaceHolder;
