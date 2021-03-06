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
  url,
  disabled
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

  const generateFileToURL = async () => {
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
      type: data.type
    };
    let file = new File([data], title, metadata);
    if(file) setFile(file);
  };

  const generateFilesToURL = async () => {
    const files = await Promise.all(url.map(
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
    if(url !== '' && typeof url === "string") generateFileToURL();
    if(Array.isArray(url)) generateFilesToURL();
  }, [url]);

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
                disabled={disabled}
                urlDocument={url}
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
            files={filteredFiles}
            current={currentFile}
            onClick={handleOnClick}
            search={search}
            onSearch={handleOnSearch}
            placeholder={placeholder}
            disabled={disabled}
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
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

UploadDocuments.defaultProps = {
  title: '',
  multiple: false,
  accept: '',
  onDrop: () => {},
  onDelete: () => {},
  placeholder: '',
  url: '',
  disabled: false
};

export default UploadDocuments;