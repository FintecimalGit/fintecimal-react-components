import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../InputWrapper';
import { rfc } from '../../InputStrings';
import { textFormats, isEmpty, validateRegex } from '../../commons/utils';

const RFCMoralInput = ({
  value,
  handleChange,
  label,
  error,
  errorMessage,
  type,
  required,
  handleBlur,
  disabled,
  autoComplete,
}) => {
  const config = {
    type,
    label,
    value,
    format: textFormats.UPPER,
    required,
    handleChange,
  };
  const errors = {
    error,
    errorMessage,
    errorMessages: rfc.errorMessages,
  };
  const isValid = (data) => {
    if (isEmpty(data) && !required) return true;
    const size = data.length;
    if (size >= 10 && size <= 12) {
      return validateRegex(data, /[A-Z]{3}[0-9][0-9][0-1][0-9][0-3][0-9][A-Z0-9]{3}/);
    }
    return false;
  };

  return <InputWrapper autoComplete={autoComplete} config={config} errors={errors} isValid={isValid} disabled={disabled} onBlur={handleBlur} />;
};

RFCMoralInput.defaultProps = {
  label: rfc.label,
  type: rfc.type,
  error: false,
  errorMessage: '',
  required: false,
  handleBlur: () => {},
  disabled: false,
  autoComplete: 'off',
};

RFCMoralInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  handleBlur: PropTypes.func,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
};

export default RFCMoralInput;
