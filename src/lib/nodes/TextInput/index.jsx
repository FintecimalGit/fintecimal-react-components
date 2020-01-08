import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import BaseInput from '../BaseInput';
import { isEmpty } from '../../commons/utils';

const TextInput = ({
  value,
  handleChange,
  label,
  error,
  errorMessage,
  required,
  onClear,
}) => {
  const [_value, setValue] = useState('');

  /**
   *
   * @param {String} data
   * @returns {Boolean}
   */
  const isValid = (data) => {
    if (isEmpty(data) && !required) return true;
    return true;
  };

  const _handleChange = (event) => {
    const {
      target: { value: eventValue }
    } = event;
    setValue(eventValue);
    handleChange(eventValue);
  };

  const handleOnClear = () => {
    setValue('');
    handleChange('');
    onClear('');
  };

  useEffect(() => {
    setValue(value);
  }, [value]);

  return <BaseInput
    isValid={isValid}
    label={label}
    value={_value}
    handleChange={_handleChange}
    required={required}
    error={error}
    onClear={onClear}
    errorMessage={errorMessage}
    onClear={handleOnClear}
  />;
};

TextInput.defaultProps = {
  label: '',
  value: '',
  handleChange: () => {},
  required: false,
  error: false,
  errorMessage: '',
  onClear: () => {},
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onClear: PropTypes.func,
};

export default TextInput;
