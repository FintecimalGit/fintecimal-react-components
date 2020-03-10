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
  disabled
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

  return <InputWrapper config={config} errors={errors} isValid={isValid} disabled={disabled} />;
};

EmailInput.defaultProps = {
  label: email.label,
  type: email.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false
};

EmailInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

export default EmailInput;
