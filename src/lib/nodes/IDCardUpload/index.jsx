import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';

const IDCardUpload = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <p>{title}</p>
      </div>
      <div className={classes.interactionContainer}></div>
    </div>
  );
};

IDCardUpload.defaultProps = {
  title: 'Identificación'
};
IDCardUpload.propTypes = {
  title: PropTypes.string
};

export default IDCardUpload;
