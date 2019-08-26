import React from 'react';
import PropTypes from 'prop-types';
import { number } from './InputStrings';
import InputWrapper from './InputWrapper';
import { textFormats } from '../commons/utils';

const NumberInput = ({ value, handleChange, label, error, errorMessage, type, required }) => {
    const config = {
        type,
        label,
        value,
        required,
        format: textFormats.NUMBER,
        handleChange,
    };
    const errors = {
        error,
        errorMessage,
        errorMessages: number.errorMessages,
    };

    const isValid = (data) => {
        if (isEmpty(data) && !required ) return true;
        // TODO: Validate is number
    };

    return (
        <InputWrapper
        config={config}
        errors={errors}
        isValid={isValid}
        />
    );
};

NumberInput.defaultProps = {
    label: number.label,
    type: number.type,
    error: false,
    errorMessage: '',
    required: false,
};

NumberInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    required: PropTypes.bool,
};

export default NumberInput;