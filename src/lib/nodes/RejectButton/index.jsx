import React from 'react';
import PropTypes from 'prop-types';
import { Fab, Badge } from '@material-ui/core';
import { ThumbDownRounded, Chat } from '@material-ui/icons';
import classnames from 'classnames';
import useStyles from './style';

const RejectIcon = ({ onClick, onClickMessage, rejected, noteOpen }) => {
  const classes = useStyles();
  const clickBadge = event => {
    event.stopPropagation();
    onClickMessage(event);
  };
  const clickButton = event => {
    event.stopPropagation();
    if (!rejected) onClick(event);
  };
  return (
    <div className={classes.root}>
      <Badge
        color="default"
        overlap="circle"
        badgeContent={<Chat />}
        className={classnames(classes.badge, { [classes.noteOpen]: noteOpen })}
        invisible={!rejected}
        onClick={clickBadge}
      >
        <Fab
          color="secondary"
          aria-label="reject"
          className={classnames(
            classes.button,
            { [classes.disabled]: rejected },
            { [classes.hover]: !rejected }
          )}
          onClick={clickButton}
        >
          <ThumbDownRounded className={classes.icon} />
        </Fab>
      </Badge>
    </div>
  );
};

RejectIcon.defaultProps = {
  rejected: true,
  noteOpen: true
};

RejectIcon.propTypes = {
  rejected: PropTypes.bool,
  noteOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onClickMessage: PropTypes.func.isRequired
};

export default RejectIcon;
