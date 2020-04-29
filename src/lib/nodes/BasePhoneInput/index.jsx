import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SpecialInput from '../SpecialInput';
import { cellphone } from '../../InputStrings';
import { isEmpty, status, validateRegex } from '../../commons/utils';
import IconText from '../IconText';
import flag from '../../assets/mexicoflag.png';

const CellPhoneInput = ({
  value,
  handleChange,
  label,
  type,
  required,
  error,
  errorMessage,
  disabled,
  handleBlur,
}) => {
  const errorMessages = cellphone.errorMessages;
  const [mError, setError] = useState(error);
  const [mErrorMessage, setErrorMessage] = useState(errorMessage);
  const [mValue, setValue] = useState(value);
  const [mStatus, setStatus] = useState(status.NORMAL);
  const [mAdornment, setAdornment] = useState('');

  const addParenthesis = number => {
    number = formatValue(number);
    if (number.length > 2) {
      const fNumber = `(${number.substr(0, 2)})${number.substr(2, number.length - 1)}`;
      return fNumber;
    }
    return number;
  };

  const mHandleChange = event => {
    const {
      target: { value },
      target
    } = event;

    if (isValid(value)) target.setCustomValidity('');
    else target.setCustomValidity(errorMessage || errorMessages.validation);

    const formattedNumber = addParenthesis(value);
    setValue(formattedNumber);
    handleChange(formatValue(value));
  };

  const onClear = () => {
    setValue('');
    handleChange('');
  };

  const isValid = data => {
    if (isEmpty(data) && !required) return true;
    return validateRegex(data, /\(?([0-9]{2})\)([0-9]{8})$/);
  };

  const onFocus = () => {
    setStatus(status.FOCUS);
    setAdornment('+52');
  };

  const onBlur = () => {
    setStatus(status.NORMAL);
    setAdornment('');
    const { validation, empty } = errorMessages;
    if (isEmpty(mValue) && required) {
      setError(true);
      setErrorMessage(empty);
    } else if (!isValid(mValue)) {
      setError(true);
      setErrorMessage(validation);
    } else {
      setError(false);
      handleBlur()
    }
  };

  const formatValue = rValue => {
    if (rValue) return rValue.replace(/[{()}]/g, '');
    return '';
  };

  useEffect(() => {
    const newMvalue = addParenthesis(formatValue(value));
    setValue(newMvalue);
    if (!newMvalue || isValid(newMvalue)) {
      setError(false);
      setErrorMessage('');
    } else {
      setError(true);
      setErrorMessage(errorMessages.validation);
    }
  }, [value]);

  return (
    <SpecialInput
      value={mValue}
      handleChange={mHandleChange}
      label={label}
      type={type}
      onBlur={onBlur}
      error={mError}
      errorMessage={mErrorMessage}
      required={required}
      onClear={onClear}
      onFocus={onFocus}
      startAdornment={mAdornment}
      disabled={disabled}
    >
      <IconText inputStatus={mError ? status.ERROR : mStatus} imgSrc={flag} text={'MXN'} />
    </SpecialInput>
  );
};

CellPhoneInput.defaultProps = {
  label: cellphone.label,
  type: cellphone.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false
};

CellPhoneInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  handleBlur: PropTypes.func,
};

export default CellPhoneInput;
