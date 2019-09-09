import React from 'react';
import PropTypes from 'prop-types';
import { text } from './InputStrings';
import InputWrapper from './InputWrapper';
import { isEmpty } from './commons/utils';

const TextInput = ({ value, handleChange, label, error, errorMessage, type, required }) => {
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
    errorMessages: text.errorMessages
  };

  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    return true;
  };

  return <InputWrapper config={config} errors={errors} isValid={isValid} />;
};

TextInput.defaultProps = {
  label: text.label,
  type: text.type,
  error: false,
  errorMessage: '',
  required: false
};

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool
};

export default TextInput;
