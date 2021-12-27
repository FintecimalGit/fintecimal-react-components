import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import BaseInput from '../BaseInput';
import { validateRegex, isEmpty, isNumber } from '../../commons/utils';

const PercentageInput = props => {
  const { value, handleChange, label, required, error, errorMessage, disabled, autoComplete, } = props;
  const [mValue, setValue] = useState(value);

  const onClear = () => {
    setValue('');
    handleChange('');
  };

  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    return isEmpty(data) || (isNumber(data) && validateRegex(data, /^\d+\.?(\d{1,2})?$/));
  };

  const formatPercentage = data => {
    return `${data}%`;
  };

  const formatNumber = data => {
    return data.replace(/[\,%]/g, '');
  };

  const deleting = eventValue => {
    let deletingValue = eventValue;
    if(eventValue.length < mValue.length) {
      deletingValue = eventValue.slice(0, -1);
    }
    return formatNumber(deletingValue);
  }

  const mHandleChange = event => {
    const {
      target: { value: eventValue }
    } = event;
    const formattedNumber = deleting(eventValue);
    if (isValid(formattedNumber)) {
      setValue(formatPercentage(formattedNumber));
      handleChange(formatPercentage(formattedNumber));
      if (formattedNumber.length === 0) onClear();
    }
  };
  
  useEffect(()=> {
    if(!value) return;
    
    const formattedNumber = formatNumber(value);
    if (isValid(formattedNumber)) {
      setValue(formatPercentage(formattedNumber));
    }
  }, [value]);

  return (
    <BaseInput
      autoComplete={autoComplete}
      label={label}
      value={mValue}
      handleChange={mHandleChange}
      required={required}
      disabled={disabled}
      error={error}
      onClear={onClear}
      errorMessage={errorMessage}
  />
  );
};

PercentageInput.defaultProps = {
  value: '',
  handleChange: () => {},
  required: false,
  disabled: false,
  error: false,
  errorMessage: '',
  autoComplete: 'off',
};

PercentageInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  autoComplete: PropTypes.string,
};

export default PercentageInput;
