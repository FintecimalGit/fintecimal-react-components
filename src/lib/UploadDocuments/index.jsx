import React, { useState, useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
const { v4: uuidv4 } = require('uuid');

import { arrayMoveImmutable } from "array-move";


import DropZone from '../DropZone';
import FilePreview from '../FilePreview';
import FileFinder from '../FileFinder';
import DeleteDialog from './DeleteDialog';

import useStyles from './style';

const UploadDocuments = ({
  title,
  multiple,
  accept,
  onDrop,
  onDelete,
  onDeleteAll,
  onDownloadFile,
  onMove,
  useDeleteDialog,
  placeholder,
  url,
  disabled,
  required,
}) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(0);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [flipId, setFlipId] = useState('1');

  const titleRef = useRef(null);

  const filteredFiles = useMemo(() => {
    const searchLower = search.toLowerCase();
    return (
      files
        .map((file) => {
          const fileNameLower = file.name.toLowerCase();
          if (fileNameLower.includes(searchLower) || searchLower === '') return file;
          return null;
        })
        .filter((file) => file !== null)
    );
  }, [files, search]);

  /**
   * @returns {Array}
   */
  const deleteFile = () => {
    const newFiles = [...files];
    const index = newFiles.findIndex((_file) => _file === file);
    if (index !== -1) newFiles.splice(index, 1);
    return { newFiles, index };
  };

  /**
   *
   * @param {Array} acceptedFiles 
   */
  const handleOnDrop = (acceptedFiles, rejectedFiles) => {
    setFiles(acceptedFiles);
    setSearch('');
    onDrop(acceptedFiles, rejectedFiles);
  };

  const handleOnAdd = (acceptedFiles, rejectedFiles) => {
   setFiles([...acceptedFiles, ...files]);
   setSearch('');
   onDrop(acceptedFiles, rejectedFiles);
  };

  const handleOnDelete = () => {
    const { newFiles, index } = deleteFile();
    onDelete(newFiles, file, index);
    setFiles(newFiles);
    setShowModal(false)
  };

  const moveCard = (oldIndex, newIndex) => {
    setFlipId((oldFlip) => {
      return uuidv4();
    });
    setFiles((oldFiles) => {
      return arrayMoveImmutable(
        oldFiles,
        oldIndex,
        newIndex
      );
    });
    onMove(oldIndex, newIndex);
  };


  const handleOnDeleteAll = () => {
    onDeleteAll();
    setFiles([]);
    setShowModal(false)
  };

  const handleOnClick = (index, file) => {
    setFile(file);
    setCurrentFile(index);
    titleRef.current.scrollIntoView();
  };

  /**
   *
   * @param {String} text
   */
  const handleOnSearch = (text) => {
    setSearch(text);
  };

  const generateFilesToURL = async (arrayUrl) => {
    const files = await Promise.all(arrayUrl.map(
      async (_url) => {
        let response = await fetch(_url);
        let data = await response.blob();
        let metadata = {
          type: data.type
        };
        let file = new File([data], title, metadata);
        return file;
      }
    ));
  
    const [file] = files;
    if(files) setFiles(files);
    if(file) setFile(file);
  };

  useEffect(() => {
    setCurrentFile(0);
    if (filteredFiles.length > 0) setFile(filteredFiles[0]);
    else setSearch('');
  }, [filteredFiles]);

  useEffect(() => {
    setCurrentFile(0);
    if (files.length <= 0) setFile(null);
  }, [files]);

  useEffect(() => {
    const arrayUrl = (url !== '' && typeof url === "string") ? [url] : url;
    if(Array.isArray(arrayUrl)) generateFilesToURL(arrayUrl);
  }, [url]);
  return (
    <div>
      <DeleteDialog
        onCancel={() => setShowModal(false)}
        onDelete={handleOnDelete}
        onDeleteAll={handleOnDeleteAll}
        title="¿Deseas Borrar el/los documentos?"
        showModal={showModal && useDeleteDialog}
      />
      <div className={classes.titleContainer} ref={titleRef}>
        <Typography className={classes.title}>
          { title }
        </Typography>
        {required && (
          <Typography className={classes.asterisk}>
            *
          </Typography>
        )}
      </div>
      {
        file
          ? (
            <FilePreview
              onDownloadFile={onDownloadFile}
              file={file}
              onDelete={useDeleteDialog ? () => setShowModal(true) : handleOnDelete}
              disabled={disabled}
              urlDocument={url}
              multiple={multiple}
              accept={accept}
              onDrop={handleOnAdd}
            />
          ) 
          : (
            <DropZone
              multiple={multiple}
              accept={accept}
              onDrop={handleOnDrop}
              disabled={disabled}
            />
          )
      }
      {
        multiple && files.length > 0 && (
          <FileFinder
            dragType={title}
            files={filteredFiles}
            current={currentFile}
            onClick={handleOnClick}
            search={search}
            onSearch={handleOnSearch}
            placeholder={placeholder}
            disabled={disabled}
            multiple={multiple}
            accept={accept}
            onDrop={handleOnAdd}
            flipId={flipId}
            moveCard={moveCard}
          />
        )
      }
    </div>
  );
};

UploadDocuments.propTypes = {
  title: PropTypes.string,
  multiple: PropTypes.bool,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onDrop: PropTypes.func,
  onDelete: PropTypes.func,
  onDeleteAll: PropTypes.func,
  onDownloadFile: PropTypes.func,
  onMove: PropTypes.func,
  useDeleteDialog: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

UploadDocuments.defaultProps = {
  title: '',
  multiple: false,
  accept: '',
  onDrop: () => {},
  onDelete: () => {},
  onDeleteAll: () => {},
  onDownloadFile: () => {},
  onMove: () => {},
  useDeleteDialog: false,
  placeholder: '',
  url: '',
  disabled: false,
  required: false,
};

export default UploadDocuments;
