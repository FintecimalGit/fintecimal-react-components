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
  disabled
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

  return <InputWrapper config={config} errors={errors} isValid={isValid} disabled={disabled} />;
};

NumberInput.defaultProps = {
  label: number.label,
  type: number.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false
};

NumberInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

export default NumberInput;
