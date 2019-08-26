import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BaseInput from './BaseInput';
import { email } from './InputStrings';

const EmailInput = ({ value, handleChange, label, error, errorMessage, type, required }) => {
    const { errorMessages } = email;
    const [emailError, setEmailError] = useState(error);
    const [emailErrorMessage, setErrorMessage] = useState(errorMessage);
    const [emailValue, setEmailValue] = useState(value);

    const emailHandleChange = (newValue) => {
        setEmailValue(newValue);
    };

    const onBlur = () => {
        const { validation, empty } = errorMessages;
        if(isEmpty(emailValue) && required) {
            setEmailError(true);
            setErrorMessage(empty);
        } else if (!isValid(emailValue)) {
            setEmailError(true);
            setErrorMessage(validation);
        } else {
            setEmailError(false);
        }
    };

    const isEmpty = (data) => !data || data.length < 1;
    const isValid = (data) => {
        if(!data) return true;
        const reg = /\S+@\S+\.\S+/;
        return reg.test(data);
    }

    useEffect(() => {
        handleChange(emailValue);
    }, [emailValue]);

    return (
        <BaseInput
        value={emailValue}
        handleChange={emailHandleChange}
        label={label || defaultLabel}
        type={type}
        onBlur={onBlur}
        error={emailError}
        errorMessage={emailErrorMessage}
        required={required}
        />
    );
};

EmailInput.defaultProps = {
    label: email.label,
    type: email.type,
    error: false,
    errorMessage: '',
    required: false,
};

EmailInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    required: PropTypes.bool,
};

export default EmailInput;