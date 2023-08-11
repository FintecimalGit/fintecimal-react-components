import React from 'react';

import PropTypes from 'prop-types';

import InputWrapper from '../InputWrapper';
import { isEmpty, textFormats } from '../../commons/utils';
import { nss } from '../../InputStrings';

export const InputNss = ({
  value,
  handleChange,
  label,
  error,
  errorMessage,
  type,
  required,
  disabled,
  autoComplete,
}) => {
  const config = {
    type,
    label,
    value,
    format: textFormats.NUMBER,
    required,
    handleChange,
  };

  const errors = {
    error,
    errorMessage,
    errorMessages: nss.errorMessages,
  };

  const luhn = (nssValue) => {
    let suma = 0;
    let par = false;

    for (let i = nssValue.length - 1; i >= 0; i--) {
      let digito = parseInt(nssValue.charAt(i), 10);
      if (par) {
        if ((digito *= 2) > 9) {
          digito -= 9;
        }
      } 

      par = !par;
      suma += digito;
    }
    return suma % 10 == 0;
  };

  const isValid = (data) => {
    if (isEmpty(data) && !required) return true;

    const regE = /^(\d{2})(\d{2})(\d{2})\d{5}$/;
    const size = data.length;
    const valid = data.match(regE);

    if (!valid) return false;

    const subDeleg = parseInt(valid[1], [10]);
    const year = new Date().getFullYear() % 100;

    let yearAlta = parseInt(valid[2], [10]);
    let yearNac = parseInt(valid[3], [10]);

    if (subDeleg != 97) {
      if (yearAlta <= year) yearAlta += 100;
      if (yearNac <= year) yearNac += 100;
      if (yearNac > yearAlta) return false;
    }

    return luhn(data);
  };

  return (
    <InputWrapper
      autoComplete={autoComplete}
      config={config}
      disabled={disabled}
      errors={errors}
      isValid={isValid}
    />
  );
};

InputNss.defaultProps = {
  label: nss.label,
  type: nss.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  autoComplete: 'off',
};

InputNss.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
};
