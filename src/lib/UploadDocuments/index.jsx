import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DropZone from '../DropZone';
import FilePreview from '../FilePreview';
import FileFinder from '../FileFinder';

import useStyles from './style';

const UploadDocuments = ({
  title,
  multiple,
  accept,
  onDrop,
  onDelete,
  placeholder,
}) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(0);
  const [search, setSearch] = useState('');

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
    return newFiles;
  };

  /**
   *
   * @param {Array} acceptedFiles 
   */
  const handleOnDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    setSearch('');
    onDrop(acceptedFiles);
  };

  const handleOnDelete = () => {
    const newFiles = deleteFile();
    onDelete(newFiles, file);
    setFiles(newFiles);
  };

  const handleOnClick = (index, file) => {
    setFile(file);
    setCurrentFile(index);
  };

  /**
   *
   * @param {String} text
   */
  const handleOnSearch = (text) => {
    setSearch(text);
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

  return (
    <div>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>
          { title }
        </Typography>
      </div>
      {
        file
          ? (
              <FilePreview
                file={file}
                onDelete={handleOnDelete}
              />
            )
          : (
            <DropZone
              multiple={multiple}
              accept={accept}
              onDrop={handleOnDrop}
            />
          )
      }
      {
        multiple && files.length > 0 && (
          <FileFinder
            files={filteredFiles}
            current={currentFile}
            onClick={handleOnClick}
            search={search}
            onSearch={handleOnSearch}
            placeholder={placeholder}
          />
        )
      }
    </div>
  );
};

UploadDocuments.propTypes = {
  title: PropTypes.string,
  multiple: PropTypes.bool,
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onDrop: PropTypes.func,
  onDelete: PropTypes.func,
  placeholder: PropTypes.string,
};

UploadDocuments.defaultProps = {
  title: '',
  multiple: false,
  accept: '',
  onDrop: () => {},
  onDelete: () => {},
  placeholder: ''
};

export default UploadDocuments;