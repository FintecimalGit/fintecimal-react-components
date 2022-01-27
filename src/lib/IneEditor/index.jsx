import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import DocumentButton from '../nodes/DocumentButton';
import DocumentCrop from '../DocumentCrop';

import useStyles from './style';

const FRONT_INDEX = 0; // Note: for reversePhoto flow
const BACK_INDEX = 1; // Note: for reversePhoto flow

const IneEditor = ({ accept, disabled, isIncorrect, onChange, values, title, handleOnDelete }) => {
  const [file, setFile] = useState(null);
  const [indexSide, setIndexSide] = useState(null);

  const clasess = useStyles();

  const filterValues = useMemo(() => values.filter((value) => value !== ''), [values]);

  const handleOnDrop = (acceptedFiles, rejectedFiles, side) => {
    if (rejectedFiles.length) {
      onChange(acceptedFiles, rejectedFiles, side);
      return;
    }
    if (acceptedFiles.length) {
      setFile(acceptedFiles[0]);
      setIndexSide(side);
    }
  };

  const onCrop = (event, blob) => {
    const name = indexSide ? 'Reverso' : 'Frontal';
    const fileCropped = new File([blob], name, { type: blob.type });
    setFile(null);
    onChange([fileCropped], [], indexSide);
  };

  return (
  <>
  <Card className={clasess.card}>
      <CardHeader
        className={clasess.cardHeader}
        title={title}
        action={
          (
            (!disabled && filterValues.length > 0) && (
                <IconButton
                    className={clasess.iconButton}
                    onClick={handleOnDelete}
                >
                  <DeleteIcon />
                </IconButton>
            )
          )
        }
      />
      <div className={clasess.container}>
        { file ? <DocumentCrop label={title} value={file} onCrop={onCrop} onBack={() => {}} /> : ( 
              <>
                <DocumentButton
                  text="Frontal"
                  side={FRONT_INDEX}
                  isCompleted={Boolean(values[FRONT_INDEX])}
                  accept={accept}
                  disabled={disabled}
                  isIncorrect={isIncorrect}
                  onDrop={handleOnDrop}
                />
                <DocumentButton
                  text="Reverso"
                  side={BACK_INDEX}
                  isCompleted={Boolean(values[BACK_INDEX])}
                  accept={accept}
                  disabled={disabled}
                  isIncorrect={isIncorrect}
                  onDrop={handleOnDrop}
                />
              </>
            )
          }
      </div>
    </Card>
  </>);
};

IneEditor.propTypes = {
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onDrop: PropTypes.func,
  disabled: PropTypes.bool,
  isIncorrect: PropTypes.bool,
  onChange: PropTypes.func,
  values: PropTypes.array,
  title: PropTypes.string,
  handleOnDelete: PropTypes.func,
};

IneEditor.defaultProps = {
  accept: '',
  onDrop: () => {},
  disabled: false,
  isIncorrect: false,
  onChange: () => {},
  values: [],
  title: '',
  handleOnDelete: () => {},
};

export default IneEditor;
