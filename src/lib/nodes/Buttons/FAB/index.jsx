import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IconButton from '@material-ui/core/IconButton';

import useStyles from './style';

const FAB = (props) => {
  const { className, children, size } = props;
  const { onClick } = props;
  const classes = useStyles();

  return (
    <IconButton
      className={classnames(classes.button, className)}
      size={size}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
};

FAB.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

FAB.defaultProps = {
  className: '',
  size: 'small',
  onClick: () => { },
};

export default FAB;
