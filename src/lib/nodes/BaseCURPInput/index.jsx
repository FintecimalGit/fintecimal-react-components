import React from 'react';
import PropTypes from 'prop-types';
import { curp } from '../../InputStrings';
import InputWrapper from '../InputWrapper';
import { textFormats, isEmpty, validateRegex } from '../../commons/utils';
import validateCurp from 'validate-curp';
import { SPECIAL_CURPS_WHITE_LIST } from './specialCurps';

const CURP_LENGTH = 18;

const CURPInput = ({
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
    format: textFormats.UPPER,
    required,
    handleChange
  };
  const errors = {
    error,
    errorMessage,
    errorMessages: curp.errorMessages
  };
  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    console.log(data.length);
    const size = data.length;
    if (size === CURP_LENGTH) {
      const { isValid: valid } = validateCurp(data);
      if (SPECIAL_CURPS_WHITE_LIST.includes(data)) return true;
      return valid;
    } else {
      return false;
    }
  };

  return <InputWrapper autoComplete={autoComplete} config={config} errors={errors} disabled={disabled} isValid={isValid} />;
};

CURPInput.defaultProps = {
  label: curp.label,
  type: curp.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  autoComplete: 'off',
};

CURPInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
};

export default CURPInput;
