import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ImageEditor from './ImageEditor';

import useStyles from './style';

const DocumentCrop = ({
  label,
  value,
  onCrop,
  onBack,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.containerAbsolute}>
        <div className={classes.header}>
          <Header
            title="Ayudanos a recortar tu foto"
            description={label}
            onBack={onBack}
          />
        </div>

        <div
          className={classes.documentContainer}
        >
          <ImageEditor
            file={value}
            onCrop={onCrop}
          />
        </div>
      </div>
    </div>
  );
};

DocumentCrop.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Blob),
  ]).isRequired,
  onCrop: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default memo(DocumentCrop);
