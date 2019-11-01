import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { clabe } from './InputStrings';
import InputWrapper from './InputWrapper';
import { textFormats, isEmpty } from './commons/utils';
import { validateClabe, getBank } from './commons/clabehelper';
const CLABE_LENGTH = 18;

const CLABEInput = ({ value, handleChange, label, error, errorMessage, type, required }) => {
  const [mValue, setValue] = useState(value);
  const mHandleChange = newValue => {
    setValue(newValue);
    handleChange(value);
    if (!isEmpty(newValue) && isValid(newValue)) {
      const { label: currentLabel } = mConfig;
      setConfig({ ...mConfig, label: `${currentLabel} ${getBank(newValue)}` });
    }
  };
  const [mConfig, setConfig] = useState({
    type,
    label,
    value,
    format: textFormats.NUMBER,
    required,
    handleChange: mHandleChange
  });

  useEffect(() => {
    setValue(value);
  }, [value]);

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

  return <InputWrapper config={mConfig} errors={errors} isValid={isValid} />;
};

CLABEInput.defaultProps = {
  label: clabe.label,
  type: clabe.type,
  error: false,
  errorMessage: '',
  required: false
};

CLABEInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool
};

export default CLABEInput;
