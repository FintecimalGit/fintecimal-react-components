import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './style';

const FilePreview = ({ file, onDelete }) => {
  const clasess = useStyles();
  const [url, setUrl] = useState('');

  const readFile = () => {
    const reader  = new FileReader();
    reader.onloadend = function () {
      setUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  /**
   * @returns {DOMElement|String}
   */
  const renderFile = () => {
    if (/^image\//.test(file.type)) {
      return <img alt={file.name} src={url} />;
    }
    else if(/^(text||application)\//.test(file.type)) {
      return <iframe title={file.name} src={url} />;
    }
    else return 'No Soportado';
  };

  const handleOnDelete = () => {
    onDelete(file);
  };

  useEffect(() => {
    readFile();
  }, [file]);

  return (
    <Card className={clasess.card}>
      <CardHeader
        className={clasess.cardHeader}
        title={file.name}
        action={
          <IconButton
            className={clasess.iconButton}
            onClick={handleOnDelete}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
      <div className={clasess.container}>
        { renderFile() }
      </div>
    </Card>
  );
};

FilePreview.propTypes = {
  file: PropTypes.instanceOf(File),
  onDelete: PropTypes.func,
};

FilePreview.defaultProps = {
  file: new File([''], 'No Soportado', { type: '' }),
  onDelete: () => {},
};

export default FilePreview;