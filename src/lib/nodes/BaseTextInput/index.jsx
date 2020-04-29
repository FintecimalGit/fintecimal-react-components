import React from 'react';
import PropTypes from 'prop-types';
import {text, generateErrorMessagesByLabel, number} from '../../InputStrings';
import InputWrapper from '../InputWrapper';
import { isEmpty } from '../../commons/utils';

const TextInput = ({
  value,
  handleChange,
  label,
  error,
  errorMessage,
  type,
  required,
  disabled,
  handleBlur,
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
    errorMessages: generateErrorMessagesByLabel(number, label)
  };

  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    return true;
  };

  return <InputWrapper config={config} errors={errors} isValid={isValid} disabled={disabled} onBlur={handleBlur}/>;
};

TextInput.defaultProps = {
  label: text.label,
  type: text.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
};

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  handleBlur: PropTypes.func,
};

export default TextInput;
