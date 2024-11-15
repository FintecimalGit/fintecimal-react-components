import React from 'react';

import PropTypes from 'prop-types';

import InputWrapper from '../InputWrapper';
import { textFormats } from '../../commons/utils';
import { nss } from '../../InputStrings';
import { isValidNss } from './validator';

export const InputNss = ({
  value,
  handleChange,
  label,
  error,
  errorMessage,
  type,
  required,
  disabled,
  autoComplete,
}) => {
  const config = {
    type,
    label,
    value,
    format: textFormats.NUMBER,
    required,
    handleChange,
  };

  const errors = {
    error,
    errorMessage,
    errorMessages: nss.errorMessages,
  };

  return (
    <InputWrapper
      autoComplete={autoComplete}
      config={config}
      disabled={disabled}
      errors={errors}
      isValid={isValidNss(value)}
    />
  );
};

InputNss.defaultProps = {
  label: nss.label,
  type: nss.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  autoComplete: 'off',
};

InputNss.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
};
