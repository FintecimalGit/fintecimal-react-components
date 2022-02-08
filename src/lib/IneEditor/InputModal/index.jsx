import React, {
  memo, useState,
} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Modal from '../../Modal';
import FileThumbnail from '../../FileThumbnail';

import useStyles from './style';

const InputModal = ({
  header,
  isOpen,
  onClose,
  onCancel,
  onSubmit,
  values
}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);

  const cleanFieldValues = () => {
    setSelected(0);
  };

  const handleOnClick = index => (file) => {
    setSelected(index);
  };

  const closeModal = () => {
    cleanFieldValues();
    onClose();
  };

  const cancelModal = () => {
    closeModal();
    onCancel();
  }

  const handleOnSubmit = () => {
    closeModal();
    onSubmit(selected);
  };

  return (
    <Modal
      header={header}
      isOpen={isOpen}
      onClose={cancelModal}
    >
      <div className={classes.container}>
        <div className={classes.form}>
          <div className={classes.formInputContainer}>
            <Grid container spacing={3}>
              {
                values.slice(0, 2).map((value, index) => (
                  <Grid key={index} item sm={6}>
                    <FileThumbnail
                      file={value}
                      onClick={handleOnClick(index)}
                      selected={selected === index}
                    />
                  </Grid>
                ))
              }
            </Grid>
          </div>
          <div className={classes.actionContainer}>
            <Button
              color="default"
              variant="outlined"
              onClick={cancelModal}
            >
              Cancelar
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={handleOnSubmit}
            >
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

InputModal.propTypes = {
  header: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  values: PropTypes.array,
};

InputModal.defaultProps = {
  header: '',
  isOpen: false,
  onClose: () => { },
  onCancel: () => { },
  onSubmit: () => { },
  values: [],
};

export default memo(InputModal);
