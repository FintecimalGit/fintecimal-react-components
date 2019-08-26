import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BaseInput from './BaseInput';
import { isEmpty, formatText } from '../commons/utils';

const InputWrapper = ({ config, errors, isValid }) => {
    const { value, handleChange, label, type, required, format } = config;
    const { error, errorMessage, errorMessages } = errors;
    const [mError, setError] = useState(error);
    const [mErrorMessage, setErrorMessage] = useState(errorMessage);
    const [mValue, setValue] = useState(value);

    const mHandleChange = (event) => {
        const { target: { value } } = event;
        if(format) {
            const formattedText = formatText(value, format);
            console.log(formattedText);
            setValue(formattedText);
        } else {
            setValue(value);
        }
    };

    const onClear = () => {
        setValue('');
    }

    const onBlur = () => {
        const { validation, empty } = errorMessages;
        if(isEmpty(mValue) && required) {
            setError(true);
            setErrorMessage(empty);
        } else if (!isValid(mValue)) {
            setError(true);
            setErrorMessage(validation);
        } else {
            setError(false);
        }
    };

    useEffect(() => {
        handleChange(mValue);
    }, [mValue]);

    return (
        <BaseInput
        value={mValue}
        handleChange={mHandleChange}
        label={label}
        type={type}
        onBlur={onBlur}
        error={mError}
        errorMessage={mErrorMessage}
        required={required}
        onClear={onClear}
        />
    );
};

InputWrapper.propTypes = {
    config: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    isValid: PropTypes.func.isRequired,
};

export default InputWrapper;