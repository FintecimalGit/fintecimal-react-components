import React from 'react';
import PropTypes from 'prop-types';

import { useDropzone } from 'react-dropzone';

import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import useStyles from './style';

const Add = ({multiple, accept, onDrop}) => {
  const classes = useStyles();

  const { getRootProps, getInputProps } = useDropzone({ multiple, accept, onDrop});

  const rootProps = getRootProps({ className: classes.dropZone });
  const inputProps = getInputProps();

  return (
    <div className={classes.dropZoneContainer}>
      <Paper {...rootProps} style={{ border: '2px dashed #4C5C68'}}>
        <input {...inputProps} />
        <div>
          <AddCircleOutlineIcon />
        </div>
      </Paper>
    </div>
  )
};

Add.propTypes = {
  multiple: PropTypes.bool,
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onDrop: PropTypes.func,
};

Add.defaultProps = {
  multiple: false,
  accept: '',
  onDrop: () => {},
};

export default Add;
