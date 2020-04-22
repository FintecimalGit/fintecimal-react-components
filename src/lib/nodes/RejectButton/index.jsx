import React from 'react';
import PropTypes from 'prop-types';
import { Fab, Badge } from '@material-ui/core';
import { ThumbDownRounded, Chat } from '@material-ui/icons';
import classnames from 'classnames';
import useStyles from './style';

const RejectIcon = ({ onClick, onClickMessage, rejected, noteOpen, size, editable }) => {
  const classes = useStyles();
  const clickBadge = event => {
    event.stopPropagation();
    onClickMessage(event);
  };
  const clickButton = event => {
    event.stopPropagation();
    if (!rejected) onClick(event);
  };

  /**
   * @returns {Boolean}
   */
  const sizeIsLarge = () => size === 'large';

  /**
   * @returns {Boolean}
   */
  const sizeIsSmall = () => size === 'small';

  return (
    <div className={classes.root}>
      <Badge
        color="default"
        overlap="circle"
        badgeContent={(
          <div className={classnames(
            classes.chat,
            { [classes.chatLarge]: sizeIsLarge(), },
            { [classes.chatSmall]: sizeIsSmall(), }
          )}>
            <Chat />
          </div>
        )}
        className={classnames(
          classes.badge,
          { [classes.noteOpen]: noteOpen, }
        )}
        invisible={!rejected}
        onClick={clickBadge}
      >
        {!editable &&
          <Fab
              color="secondary"
              aria-label="reject"
              className={classnames(
                  classes.button,
                  {[classes.disabled]: rejected},
                  {[classes.hover]: !rejected},
                  {[classes.buttonLarge]: sizeIsLarge(),},
                  {[classes.buttonSmall]: sizeIsSmall(),}
              )}
              onClick={clickButton}
          >
            <ThumbDownRounded className={classes.icon}/>
          </Fab>
        }
      </Badge>
    </div>
  );
};

RejectIcon.defaultProps = {
  rejected: true,
  noteOpen: true,
  size: 'large',
};

RejectIcon.propTypes = {
  rejected: PropTypes.bool,
  noteOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onClickMessage: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['large', 'small']),
};

export default RejectIcon;
