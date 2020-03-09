import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BaseInput from '../BaseInput';
import { isEmpty } from '../../commons/utils';

const TextInput = props => {
  const { value, handleChange, label, required, error, errorMessage } = props;
  const [mValue, setValue] = useState(value);

  const onClear = () => {
    setValue('');
    handleChange('');
  };

  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    if (!isEmpty(data)) return true;
    return false;
  };

  const mHandleChange = event => {
    const {
      target: { value: eventValue }
    } = event;
    if (isValid(eventValue)) {
      setValue(eventValue);
      handleChange(eventValue);
    }
  };

  return (
    <BaseInput
      label={label}
      value={mValue}
      handleChange={mHandleChange}
      required={required}
      error={error}
      onClear={onClear}
      errorMessage={errorMessage}
    ></BaseInput>
  );
};

TextInput.defaultProps = {
  value: '',
  handleChange: () => {},
  required: false,
  error: false,
  errorMessage: ''
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default TextInput;
