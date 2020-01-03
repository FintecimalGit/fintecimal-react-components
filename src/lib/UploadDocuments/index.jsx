import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DropZone from '../DropZone';
import FilePreview from '../FilePreview';

import useStyles from './style';

const UploadDocuments = ({
  title,
  multiple,
  accept,
  onDrop,
  onDelete,
}) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);

  /**
   *
   * @param {Array} acceptedFiles 
   */
  const handleOnDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    onDrop(acceptedFiles);
  };

  /**
   *
   * @param {File} file 
   */
  const handleOnDelete = (file) => {
    setFile(false);
    onDelete(file);
  };

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
};

UploadDocuments.defaultProps = {
  title: '',
  multiple: false,
  accept: '',
  onDrop: () => {},
  onDelete: () => {},
};

export default UploadDocuments;