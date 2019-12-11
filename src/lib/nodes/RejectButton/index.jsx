import React from 'react';
import PropTypes from 'prop-types';
import { Fab } from '@material-ui/core';
import { ThumbDownRounded } from '@material-ui/icons';
import useStyles from './style';

const RejectIcon = ({ onClick, onClickMessage }) => {
  const classes = useStyles();
  return (
    <div>
      <Fab color="secondary" aria-label="reject" className={classes.button} onClick={onClick}>
        <ThumbDownRounded className={classes.icon} />
      </Fab>
    </div>
  );
};

RejectIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClickMessage: PropTypes.func.isRequired
};

export default RejectIcon;
