/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

import useStyles from './style';

const ButtonFlat = ({
  children,
  className,
  text,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Button
      className={classnames(classes.button, className)}
      {...props}
    >
      { children || text }
    </Button>
  );
};

ButtonFlat.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  text: PropTypes.string,
};

ButtonFlat.defaultProps = {
  children: '',
  className: '',
  text: '',
};

export default ButtonFlat;
