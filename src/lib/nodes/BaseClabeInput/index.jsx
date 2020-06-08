import React from 'react';
import PropTypes from 'prop-types';
import { clabe } from '../../InputStrings';
import InputWrapper from '../InputWrapper';
import { validateClabe } from '../../commons/clabehelper';
import { isEmpty } from '../../commons/utils';

const CLABE_LENGTH = 18;

const CLABEInput = ({
  value,
  handleChange,
  label,
  error,
  errorMessage,
  type,
  required,
  disabled,
  handleBlur
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
    errorMessages: clabe.errorMessages
  };

  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    const size = data.length;
    if (size === CLABE_LENGTH) {
      return validateClabe(data);
    } else {
      return false;
    }
  };

  return (
    <InputWrapper
      config={config}
      errors={errors}
      isValid={isValid}
      disabled={disabled}
      onBlur={handleBlur}
    />
  );
};

CLABEInput.defaultProps = {
  label: clabe.label,
  type: clabe.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false
};

CLABEInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  handleBlur: PropTypes.func
};

export default CLABEInput;
