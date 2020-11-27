import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, formatText } from '../../commons/utils';
import BaseInput from '../BaseInput';

const InputWrapper = ({ config, errors, isValid, disabled, onBlur, }) => {
  const { value, handleChange, label, type, required, format, defaultValue } = config;
  const { maxLength } = config;
  const { error, errorMessage, errorMessages } = errors;
  const [mError, setError] = useState(error);
  const [mErrorMessage, setErrorMessage] = useState(errorMessage);
  const [mValue, setValue] = useState(value);

  const mHandleChange = event => {
    const {
      target,
      target: { value }
    } = event;
    if (format) {
      const formattedText = formatText(value, format);

      if (isValid(formattedText)) target.setCustomValidity('');
      else target.setCustomValidity(errorMessage || errorMessages.validation);

      setValue(formattedText);
      handleChange(formattedText);
    } else {
      setValue(value);
      handleChange(value);
    }
  };

  const onClear = () => {
    setValue('');
    handleChange('');
  };

  const mOnBlur = () => {
    const { validation, empty } = errorMessages;
    if (isEmpty(mValue) && required) {
      setError(true);
      setErrorMessage(empty);
    } else if (!isValid(mValue)) {
      setError(true);
      setErrorMessage(validation);
    } else {
      setError(false);
      setErrorMessage('');
      onBlur();
    }
    onBlur();
  };

  useEffect(() => {
    if (defaultValue && !value) {
      setValue(defaultValue);
      handleChange(defaultValue);
    }
  }, []);

  useEffect(() => {
    if (mValue !== value) {
      const newMvalue = format ? formatText(value, format) : value;
      setValue(newMvalue);
      if (!newMvalue || isValid(newMvalue)) {
        setError(false);
        setErrorMessage('');
      } else {
        setError(true);
        setErrorMessage(errorMessages.validation);
      }
    }
  }, [value]);

  useEffect(() => {
    setError(error);
    if (error) {
      setErrorMessage(errorMessages.empty);
    }
  }, [error]);

  return (
    <BaseInput
      value={mValue}
      handleChange={mHandleChange}
      label={label}
      type={type}
      onBlur={mOnBlur}
      error={mError}
      errorMessage={mErrorMessage}
      required={required}
      onClear={onClear}
      disabled={disabled}
      maxLength={maxLength}
    />
  );
};

InputWrapper.propTypes = {
  config: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isValid: PropTypes.func.isRequired
};

InputWrapper.defaultProps = {
  onBlur: () => { },
}

export default InputWrapper;
