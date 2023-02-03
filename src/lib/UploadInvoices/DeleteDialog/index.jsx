import React from 'react';
import PropTypes from 'prop-types';

import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import useStyles from './style';

const DeleteDialog = ({ onCancel, onDelete, onDeleteAll, title, showModal }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{ root: classes.dialogContainer }}
    >
      <DialogTitle id="responsive-dialog-title">
        {title}
      </DialogTitle>
      <div className={classes.iconContainer}>
        <WarningIcon className={classes.icon} />
      </div>
      <DialogActions>
      <Button onClick={onDelete} color="primary">
          Eliminar
        </Button>
        <Button onClick={onDeleteAll} color="primary">
          Eliminar todos
        </Button>
        <Button onClick={onCancel} color="primary">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteDialog.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDeleteAll: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default DeleteDialog;
