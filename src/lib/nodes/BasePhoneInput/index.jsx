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
  maxLength,
}) => {
  const { errorMessages } = cellphone;
  const [mError, setError] = useState(error);
  const [mErrorMessage, setErrorMessage] = useState(errorMessage);
  const [mValue, setValue] = useState(value);
  const [mStatus, setStatus] = useState(status.NORMAL);
  const [mAdornment, setAdornment] = useState('');

  const addParenthesis = (number) => {
    number = formatValue(number);
    if (number.length > 2) {
      const fNumber = `(${number.substr(0, 2)})${number.substr(2, number.length - 1)}`;
      return fNumber;
    }
    return number;
  };

  const mHandleChange = (event) => {
    let {
      target: { value },
      target,
    } = event;

    // verifica si hay algo que no sea numero o parentesis y lo borra haciendo que el formato sea (33)33333333
    if (validateRegex(value, /[a-zA-ZÀ-ÿñ.,\/#!$%^&*;:{}=\-+_`~´"¨°|'¡¿?\\\[\]]/g)) value = onlyNumbers(value);
    if (isValid(value)) target.setCustomValidity('');
    else target.setCustomValidity(errorMessage || errorMessages.validation);

    const formattedNumber = addParenthesis(value);
    setValue(formattedNumber);
    //handleChange(formatValue(value));
  };

  const onClear = () => {
    setValue('');
    handleChange('');
  };

  const isValid = (data) => {
    if (isEmpty(data) && !required) return true;
    return validateRegex(data, /\(?([0-9]{2})\)([0-9]{8})$/);
  };

  const onlyNumbers = (inputInvalid) => {
    inputInvalid = inputInvalid.slice(0, -1);
    return inputInvalid;
  }

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
      handleBlur();
      handleChange(formatValue(mValue));
    }
  };

  const formatValue = (rValue) => {
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

  useEffect(() => {
    setError(error);
    if (!error) {
      return;
    }
    setErrorMessage(errorMessages.empty);
  }, [error]);

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
      maxLength={maxLength}
    >
      <IconText inputStatus={mError ? status.ERROR : mStatus} imgSrc={flag} text="MXN" />
    </SpecialInput>
  );
};

CellPhoneInput.defaultProps = {
  label: cellphone.label,
  type: cellphone.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  handleBlur: () => {},
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
