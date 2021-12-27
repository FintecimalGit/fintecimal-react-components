import React from 'react';
import PropTypes from 'prop-types';
import { email } from '../../InputStrings';
import InputWrapper from '../InputWrapper';

const EmailInput = ({
  value,
  handleChange,
  label,
  error,
  errorMessage,
  type,
  required,
  disabled,
  handleBlur,
  autoComplete,
}) => {
  const config = {
    type,
    label,
    value,
    required,
    handleChange
  };
  const errors = {
    error,
    errorMessage,
    errorMessages: email.errorMessages
  };

  const isValid = data => {
    if (!data) return true;
    const reg = /\S+@\S+\.\S+/;
    return reg.test(data);
  };

  return <InputWrapper autoComplete={autoComplete} config={config} errors={errors} isValid={isValid} disabled={disabled} onBlur={handleBlur}/>;
};

EmailInput.defaultProps = {
  label: email.label,
  type: email.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  autoComplete: 'off',
};

EmailInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  handleBlur: PropTypes.func,
  autoComplete: PropTypes.string,
};

export default EmailInput;
