import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import DocumentCrop from '../../DocumentCrop';

import useStyles from './style';

const DocumentEditor = ({ file, onChange, urlDocument, cancel, title, currentFileIndex }) => {
  const clasess = useStyles();

  const onCrop = (event, blob) => {
    if(urlDocument !== '' && typeof urlDocument === "string") {
      const name = urlDocument.split('/').pop().split('?')[0];
      const fileCropped = new File([blob], name, { type: blob.type });
      onChange([fileCropped]);
      return;
    }
    const newDocuments = urlDocument.map((documentURL, index) => {
      if (index !== currentFileIndex) return documentURL;
      const name = documentURL.split('/').pop().split('?')[0];
      const fileCropped = new File([blob], name, { type: blob.type });
      return fileCropped;
    });
    onChange(newDocuments);
  };

  return (
    <Card className={clasess.card}>
      <CardHeader
        className={clasess.cardHeader}
        title={file.name}
      />
      <div className={clasess.container}>
        <DocumentCrop cancel={cancel} label={title} value={file} onCrop={onCrop} onBack={() => {}} />
      </div>
    </Card>
  );
};

DocumentEditor.propTypes = {
  file: PropTypes.instanceOf(File),
  onChange: PropTypes.func,
  urlDocument: PropTypes.string,
  cancel: PropTypes.func,
  title: PropTypes.string,
  currentFileIndex: PropTypes.number,
};

DocumentEditor.defaultProps = {
  file: new File([''], 'No Soportado', { type: '' }),
  onChange: () => {},
  urlDocument: '',
  cancel: () => {},
  title: '',
  currentFileIndex: 0,
};

export default DocumentEditor;