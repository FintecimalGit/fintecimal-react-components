import React, { useState, useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
const { v4: uuidv4 } = require('uuid');

import { arrayMoveImmutable } from "array-move";

import FilePreview from '../FilePreview';
import FileFinder from '../FileFinder';

import useStyles from './style';

const currencyFormatter = (value, defaultValue = '', suffix = '') => {
  if (!value || typeof value !== 'number') return defaultValue;
  return `$${value.toLocaleString('en-US')}${suffix ? ` ${suffix}` : ''}`;
};

const UploadInvoices = ({
  title,
  multiple,
  accept,
  onDrop,
  onDownloadFile,
  onMove,
  useDeleteDialog,
  placeholder,
  url,
  disabled,
  required,
  useEditorIne,
  verify,
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
          const fileNameLower = file ? file.name.toLowerCase() : '';
          if (fileNameLower.includes(searchLower) || searchLower === '') return file;
          return null;
        })
        .filter((file) => file !== null && file !== '')
    );
  }, [files, search]);

  /**
   * @returns {Array}
   */

  /**
   *
   * @param {Array} acceptedFiles 
   */

  const handleOnAdd = (acceptedFiles, rejectedFiles) => {
   setFiles([...acceptedFiles, ...files]);
   setSearch('');
   onDrop(acceptedFiles, rejectedFiles);
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

  const handleOnDelete = () => {};

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

  const generateFilesToURL = async (invoices) => {
    try {
      const files = await Promise.all(invoices.map(
        async (invoice) => {
          console.log({ invoice });
          if (invoice instanceof File) return invoice;
          const { pdf, importe, uuid: invoiceName = '' } = invoice;
          let response = await fetch(pdf);
          let data = await response.blob();
          let metadata = {
            type: data.type
          };
          const _title = `FACTURA UUID: ${invoiceName || uuidv4()} Importe: ${currencyFormatter(importe, 0, 'MXN')}`;
          let file = new File([data], _title, metadata);
          return file;
        }
      ));
      const [file] = files;
      console.log({ files });
      console.log({ file });
      if(files) setFiles(files);
      if(file) setFile(file);
    }
    catch(e) {
      console.log(e);
    }
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
    const newInvoices = (url !== '' && typeof url === "string") ? [url] : url;
    if(Array.isArray(newInvoices)) generateFilesToURL(newInvoices);
  }, [url]);
  return (
    <div>
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
        { file ? <FilePreview
          verify={verify}
          onDownloadFile={onDownloadFile}
          file={file}
          onDelete={useDeleteDialog ? () => setShowModal(true) : handleOnDelete}
          disabled={disabled}
          urlDocument={url}
          multiple={multiple}
          accept={accept}
          onDrop={handleOnAdd}
        /> : ''}
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
            disabledAdd={disabled || useEditorIne}
          />
        )
      }
    </div>
  );
};

UploadInvoices.propTypes = {
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
  useEditorIne: PropTypes.bool,
  fileConvertion: PropTypes.func,
  verify: PropTypes.object,
};

UploadInvoices.defaultProps = {
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
  useEditorIne: false,
  fileConvertion: () => {},
  verify: {
    status: -1,
  },
};

export default UploadInvoices;
