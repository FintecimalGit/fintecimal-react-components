import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../InputWrapper';
import { rfc } from '../../InputStrings';
import { textFormats, isEmpty, validateRegex } from '../../commons/utils';

const RFCInput = ({
      value,
      handleChange,
      label,
      error,
      errorMessage,
      type,
      required,
      handleBlur,
}) => {
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
    errorMessages: rfc.errorMessages
  };
  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    const size = data.length;
    if (size >= 10 && size <= 13) {
      if (size === 10) {
        return validateRegex(data, /[A-Z]{4}[0-9][0-9][0-1][0-9][0-3][0-9]/);
      } else if (size === 12) {
        return validateRegex(data, /[A-Z]{3}[0-9][0-9][0-1][0-9][0-3][0-9][A-Z0-9]{3}/);
      } else {
        return validateRegex(data, /[A-Z]{4}[0-9][0-9][0-1][0-9][0-3][0-9][A-Z0-9]{3}/);
      }
    } else {
      return false;
    }
  };

  return <InputWrapper config={config} errors={errors} isValid={isValid} onBlur={handleBlur} />;
};

RFCInput.defaultProps = {
  label: rfc.label,
  type: rfc.type,
  error: false,
  errorMessage: '',
  required: false
};

RFCInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  handleBlur: PropTypes.func,
};

export default RFCInput;
