import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ModalMUI from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

import useStyles from './style';

const Modal = ({
  isOpen,
  onClose,
  header,
  disableOnClose,
  children,
}) => {
  const classes = useStyles();

  return (
    <ModalMUI
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={isOpen}
      onClose={onClose}
      disableEnforceFocus
    >
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <div className={classes.headerContainer}>
            <Typography variant="h6">
              { header }
            </Typography>
            <IconButton
              onClick={onClose}
              className={classes.iconButton}
              disabled={disableOnClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className={classes.bodyContainer}>
            { children }
          </div>
        </Paper>
      </div>
    </ModalMUI>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  header: PropTypes.string,
  disableOnClose: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  header: '',
  disableOnClose: false,
  children: '',
};

export default memo(Modal);
