import React, { memo } from 'react';
import PropTypes from 'prop-types';

import DropZone from '../../DropZone';

const DocumentButton = ({
  text,
  isCompleted,
  side,

  disabled,
  accept,
  onDrop,
  isIncorrect,
}) => {

  const handleOnDrop = (acceptedFiles, rejectedFiles) => {
    onDrop(acceptedFiles, rejectedFiles, side);
  };

  return (
    <>
      { !isCompleted && (
        <DropZone
          accept={accept}
          onDrop={handleOnDrop}
          disabled={disabled}
          isIncorrect={isIncorrect}
          text={text}
          isIneEditor
        />
      )
    }
    </>
  );
};

DocumentButton.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,

  disabled: PropTypes.bool,
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onDrop: PropTypes.func,
  isIncorrect: false,
  side: PropTypes.number,
};

DocumentButton.defaultProps = {
  text: '',
  isCompleted: false,

  disabled: false,
  accept: '',
  onDrop: () => {},
  isIncorrect: false,
  side: 0,
};

export default memo(DocumentButton);
