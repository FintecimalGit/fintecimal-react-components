import React from 'react';
import PropTypes from 'prop-types';

import { useDropzone } from 'react-dropzone';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import useStyles from './style';

const DropZone = ({ multiple, accept, onDrop, disabled, isIncorrect }) => {
  const classes = useStyles();

  const { getRootProps, getInputProps } = useDropzone({ multiple, accept, onDrop })

  const rootProps = getRootProps({ className: classes.dropZone });
  const inputProps = getInputProps();

  return (
    <div className={classes.dropZoneContainer}>
      <Paper {...rootProps} style={{ border: isIncorrect ? '2px dashed #f44336' : '2px dashed #4C5C68'}}>
        <input {...inputProps} disabled={disabled} />
        <div>
          <AddCircleOutlineIcon />
        </div>
        <Typography className={classes.typography}>
          Arrastra o selecciona el (los)<br/>
          documento(s) para agregar
        </Typography>
      </Paper>
    </div>
  )
};

DropZone.propTypes = {
  multiple: PropTypes.bool,
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onDrop: PropTypes.func,
  disabled: PropTypes.bool,
  isIncorrect: PropTypes.bool,
};

DropZone.defaultProps = {
  multiple: false,
  accept: '',
  onDrop: () => {},
  disabled: false,
  isIncorrect: false
};

export default DropZone;
