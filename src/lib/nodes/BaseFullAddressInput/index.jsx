import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useStyles from './style';

import BaseAddressInput from '../BaseAddressInput';
import TextInput from '../BaseTextInput';
import NumberInput from '../BaseNumberInput';

const FullAddressInput = ({ value, required, disabled, handleChange }) => {
  const classes = useStyles();
  const [addressValue, setAddressValue] = useState({});

  useEffect(() => {
    setAddressValue(value);
  }, [value]);

  const handleChangeValue = (_value, key) => {
    const newAddressValue = { ...addressValue, [key]: _value };
    setAddressValue(newAddressValue);
  };

  const { administrativeArea = '', country = '', locality = '' } = addressValue;
  const { postalCode = '', streetName = '', streetNumber = '' } = addressValue;
  const { sublocality = '' } = addressValue;
  return (
    <div className={classes.root}>
      <div>
        <BaseAddressInput
          label="Dirección"
          value={addressValue}
          handleChange={setAddressValue}
          required={required}
          disabled={disabled}
        />
      </div>
      <TextInput
        label="Calle"
        value={streetName}
        handleChange={(_value) => handleChangeValue(_value, 'streetName')}
        required={required}
        disabled={disabled}
      />
      <div>
        <TextInput
          label="Número exterior"
          value={streetNumber}
          handleChange={(_value) => handleChangeValue(_value, 'streetNumber')}
          required={required}
          disabled={disabled}
        />
      </div>
      <div>
        <NumberInput
          label="Código postal"
          value={postalCode}
          handleChange={(_value) => handleChangeValue(_value, 'postalCode')}
          required={required}
          disabled={disabled}
        />
      </div>
      <div>
        <TextInput
          label="Colonia"
          value={sublocality}
          handleChange={(_value) => handleChangeValue(_value, 'sublocality')}
          required={required}
          disabled={disabled}
        />
      </div>
      <div>
        <TextInput
          label="Municipio"
          value={locality}
          handleChange={(_value) => handleChangeValue(_value, 'locality')}
          required={required}
          disabled={disabled}
        />
      </div>
      <div>
        <TextInput
          label="Estado"
          value={administrativeArea}
          handleChange={(_value) => handleChangeValue(_value, 'administrativeArea')}
          required={required}
          disabled={disabled}
        />
      </div>
      <div>
        <TextInput
          label="País"
          value={country}
          handleChange={(_value) => handleChangeValue(_value, 'country')}
          required={required}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

FullAddressInput.propTypes = {
  value: PropTypes.object,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

FullAddressInput.defaultProps = {
  value: {},
  label: '',
  handleChange: () => { },
  disabled: false,
  required: false,
};

export default FullAddressInput;

