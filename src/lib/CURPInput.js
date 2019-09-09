import React from 'react';
import PropTypes from 'prop-types';
import { curp } from './InputStrings';
import InputWrapper from './InputWrapper';
import { textFormats, isEmpty, validateRegex } from './commons/utils';
const CURP_LENGTH = 18;

const CURPInput = ({ value, handleChange, label, error, errorMessage, type, required }) => {
  const config = {
    type,
    label,
    value,
    format: textFormats.UPPER,
    required,
    handleChange
  };
  const errors = {
    error,
    errorMessage,
    errorMessages: curp.errorMessages
  };
  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    const size = data.length;
    if (size === CURP_LENGTH) {
      return validateRegex(data, /[A-Z]{4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z0-9]{8}/);
    } else {
      return false;
    }
  };

  return <InputWrapper config={config} errors={errors} isValid={isValid} />;
};

CURPInput.defaultProps = {
  label: curp.label,
  type: curp.type,
  error: false,
  errorMessage: '',
  required: false
};

CURPInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool
};

export default CURPInput;
