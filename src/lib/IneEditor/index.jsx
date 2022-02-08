import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import DocumentButton from '../nodes/DocumentButton';
import DocumentCrop from '../DocumentCrop';
import InputModal from './InputModal';

import useStyles from './style';

const FRONT_INDEX = 0; // Note: for reversePhoto flow
const BACK_INDEX = 1; // Note: for reversePhoto flow

const IneEditor = ({ accept, disabled, isIncorrect, onChange, values, title, handleOnDelete, fileConvertion, disabledDelete }) => {
  const [file, setFile] = useState(null);
  const [indexSide, setIndexSide] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [files, setFiles] = useState([]);

  const clasess = useStyles();

  const filterValues = useMemo(() => values.filter((value) => value !== ''), [values]);

  const isPngType = (file) => {
    return file.type.split('/').pop() === 'png';
  };

  const convertUrlToFile = async (url, name = '') => {
    // let _url = Array.isArray(url) ? url[0] : url;
    if(!url) return '';
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
      type: data.type
    };
    let fileName = name || title;
    let file = new File([data], fileName, metadata);
    return file;
  }

  const handleOnDrop = async (acceptedFiles, rejectedFiles, side) => {
    if (rejectedFiles.length) {
      onChange(acceptedFiles, rejectedFiles, side);
      return;
    }
    if (acceptedFiles.length) {
      let acceptFiles = acceptedFiles[0];
      if (!isPngType(acceptFiles)) {
        const convertedFiles = await fileConvertion(acceptedFiles, 'cropConvertion');
        if (Array.isArray(convertedFiles) && convertedFiles.length > 1) {
          acceptFiles = await Promise.all(convertedFiles.map((convertedFile, index) => convertUrlToFile(convertedFile, `Página ${index + 1}`)));
          setIndexSide(side);
          setFiles(acceptFiles);
          setOpenModal(true);
        } else {
          acceptFiles = await convertUrlToFile(convertedFiles);
          setFile(acceptFiles);
          setIndexSide(side);
        }
      } else {
        setFile(acceptFiles);
        setIndexSide(side);
      }
    }
  };

  const onCrop = (event, blob) => {
    const extension = blob.type.split('/').pop();
    const name = indexSide ? `Reverso.${extension}` : `Frontal.${extension}`;
    const fileCropped = new File([blob], name, { type: blob.type });
    setFile(null);
    onChange([fileCropped], [], indexSide);
  };

  const cancel = () => {
    setFile(null);
    setIndexSide(null);
    setFiles([]);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onSubmit = (numPage) => {
    const theFile = files[numPage];
    setFile(theFile);
    setFiles([]);
  };

  return (
  <>
  <InputModal 
    header="Seleccione la página"
    isOpen={openModal}
    onClose={onCloseModal}
    onCancel={cancel}
    onSubmit={onSubmit}
    title="Pagina debe ser mayor a 0"
    maxLength={files.length}
    values={files}
  />
  <Card className={clasess.card}>
      <CardHeader
        className={clasess.cardHeader}
        title={title}
        action={
          (
            (!disabled && filterValues.length > 0 && !disabledDelete) && (
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
        { file ? <DocumentCrop cancel={cancel} label={title} value={file} onCrop={onCrop} onBack={() => {}} /> : ( 
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
  fileConvertion: PropTypes.func,
  disabledDelete: PropTypes.func,
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
  fileConvertion: () => {},
  disabledDelete: false,
};

export default IneEditor;
