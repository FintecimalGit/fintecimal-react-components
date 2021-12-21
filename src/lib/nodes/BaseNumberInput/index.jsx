import React from 'react';
import PropTypes from 'prop-types';
import {generateErrorMessagesByLabel, number} from '../../InputStrings';
import InputWrapper from '../InputWrapper';
import { textFormats, isNumber, isEmpty } from '../../commons/utils';

const NumberInput = ({
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
    handleChange,
    format: textFormats.NUMBER
  };
  const errors = {
    error,
    errorMessage,
    errorMessages: generateErrorMessagesByLabel(number, label)
  };

  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    if (!isNumber(data)) return false;
    return true;
  };

  return <InputWrapper autoComplete={autoComplete} config={config} errors={errors} isValid={isValid} disabled={disabled} onBlur={handleBlur}/>;
};

NumberInput.defaultProps = {
  label: number.label,
  type: number.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  autoComplete: 'off',
};

NumberInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  handleBlur: PropTypes.func,
  autoComplete: PropTypes.string,
};

export default NumberInput;
