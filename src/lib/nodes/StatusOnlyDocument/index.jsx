import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';

const STATUS = {
  Rechazado: '#C25B5B',
  Cargado: '#5BC2C2',
  Pendiente: '#C1C1C1',
};

const StatusOnlyDocument = ({ label, status }) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <p className={classes.label}>{label}</p>
      <p style={{ color: STATUS[status] }} className={classes.status}>{status}</p>
    </div>
  );
};

StatusOnlyDocument.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default StatusOnlyDocument;
