import React from 'react';
import PropTypes from 'prop-types';

import { useDropzone } from 'react-dropzone';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import useStyles from './style';

const DropZone = ({ multiple, accept, onDrop, disabled, isIncorrect, text, isIneEditor }) => {
  const classes = useStyles();

  const { getRootProps, getInputProps } = useDropzone({ multiple, accept, onDrop })

  const rootProps = getRootProps({ className: classes.dropZone });
  const inputProps = getInputProps();

  return (
    <div className={classnames(classes.dropZoneContainer,
      {
        [classes.isIneEditor]: isIneEditor,
      }
    )}>
      <Paper {...rootProps} style={{border: isIncorrect ? '2px dashed #f44336' : '2px dashed #4C5C68'}}>
        <input {...inputProps} disabled={disabled} />
        <div>
          <AddCircleOutlineIcon />
        </div>
        { text ? text : (
            <Typography className={classes.typography}>
            Arrastra o selecciona el (los)<br/>
            documento(s) para agregar
          </Typography>
          )
        }
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
  text: PropTypes.string,
  isIneEditor: PropTypes.bool,
};

DropZone.defaultProps = {
  multiple: false,
  accept: '',
  onDrop: () => {},
  disabled: false,
  isIncorrect: false,
  text: '',
  isIneEditor: false,
};

export default DropZone;
