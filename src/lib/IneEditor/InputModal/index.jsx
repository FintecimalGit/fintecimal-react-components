import React, {
  memo, useState,
} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Modal from '../../Modal';

import useStyles from './style';

const InputModal = ({
  header,
  isOpen,
  onClose,
  onCancel,
  onSubmit,
  title,
  maxLength,
}) => {
  const classes = useStyles();
  const [fiedlValue, setFieldValue] = useState('');

  const cleanFieldValues = () => {
    setFieldValue('');
  };

  const handleOnChange = (e) => {
    const { target: { value } } = e;
    const numberValue = +value;
    if (numberValue <= maxLength) {
      setFieldValue(numberValue.toString());
    }
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
    if (+fiedlValue <= 0) return;
    closeModal();
    onSubmit(fiedlValue);
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
            <Typography variant="h6">
              {title}
            </Typography>
            <TextField
              value={fiedlValue}
              id="standard-basic"
              label="Página"
              variant="standard"
              onChange={handleOnChange}
              type="number"
            />
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
  title: PropTypes.string,
  maxLength: PropTypes.number,
};

InputModal.defaultProps = {
  header: '',
  isOpen: false,
  onClose: () => { },
  onCancel: () => { },
  onSubmit: () => { },
  title: '',
  maxLength: 1,
};

export default memo(InputModal);
