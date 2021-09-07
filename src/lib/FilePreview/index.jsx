import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './style';

const FilePreview = ({ file, onDelete, disabled, urlDocument }) => {
  const clasess = useStyles();
  const [url, setUrl] = useState('');

  const readFile = () => {
    const reader  = new FileReader();
    reader.onloadend = function () {
      const _url = URL.createObjectURL(file);
      setUrl(_url);
    };
    reader.readAsDataURL(file);
  };

  /**
   * @returns {DOMElement|String}
   */
  const renderFile = () => {
    if (/^image\//.test(file.type)) {
      return <img alt={file.name} src={url} height={'auto'} />;
    }
    else if(/^(text||application)\//.test(file.type)) {
      return <iframe title={file.name} src={url} />;
    }
    else return 'No Soportado';
  };

  const readUrlDocument = () => {
    setUrl(urlDocument);
  };

  const handleOnDelete = () => {
    onDelete(file);
  };

  useEffect(() => {
    if (urlDocument && !Array.isArray(urlDocument)) {
      readUrlDocument();
    } else {
      readFile();
    }
  }, [file, urlDocument]);

  return (
    <Card className={clasess.card}>
      <CardHeader
        className={clasess.cardHeader}
        title={file.name}
        action={
          (
            !disabled && (
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
        { renderFile() }
      </div>
    </Card>
  );
};

FilePreview.propTypes = {
  file: PropTypes.instanceOf(File),
  onDelete: PropTypes.func,
  disabled: PropTypes.bool,
  urlDocument: PropTypes.string,
};

FilePreview.defaultProps = {
  file: new File([''], 'No Soportado', { type: '' }),
  onDelete: () => {},
  disabled: false
};

export default FilePreview;