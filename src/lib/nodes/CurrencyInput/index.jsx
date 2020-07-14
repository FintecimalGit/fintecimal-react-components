import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import BaseInput from '../BaseInput';
import { validateRegex, isEmpty, isNumber } from '../../commons/utils';

const CurrencyInput = props => {
  const { value, handleChange, label, required, error, errorMessage } = props;
  const [mValue, setValue] = useState(value);

  const onClear = () => {
    setValue('');
    handleChange('');
  };

  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    return isEmpty(data) || (isNumber(data) && validateRegex(data, /^\d+\.?(\d{1,2})?$/));
  };

  const formatMoney = data => {
    return `$${data.replace(/\d(?=(\d{3})+(\.\d+)?$)/g, '$&,')}`;
  };

  const formatNumber = data => {
    return data.replace(/[\,$]/g, '');
  };

  const mHandleChange = event => {
    const {
      target: { value: eventValue }
    } = event;
    const formattedNumber = formatNumber(eventValue);
    if (isValid(formattedNumber)) {
      setValue(formatMoney(formattedNumber));
      handleChange(formattedNumber);
    }
  };
  
  useEffect(()=> {
    if(!value) return;
    
    const formattedNumber = formatNumber(value);
    if (isValid(formattedNumber)) {
      setValue(formatMoney(formattedNumber));
    }
  }, [value]);

  return (
    <BaseInput
      label={label}
      value={mValue}
      handleChange={mHandleChange}
      required={required}
      error={error}
      onClear={onClear}
      errorMessage={errorMessage}
  />
  );
};

CurrencyInput.defaultProps = {
  value: '',
  handleChange: () => {},
  required: false,
  error: false,
  errorMessage: ''
};

CurrencyInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default CurrencyInput;
