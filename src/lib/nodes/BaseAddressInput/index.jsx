import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import useStyles from './style';

import { getAddress } from '../../api/google'

const AddressInput = ({
  value, disabled,
  label, handleChange,
  required,
}) => {
  const classes = useStyles();
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState('');

  const buildAddress = (_value) => {
    const { streetName = '', streetNumber ='', sublocality = '' } = _value;
    const { locality =  '', administrativeArea = '', country = '' } = value;
    const newStreetNumber = streetNumber ? ` ${streetNumber}` : '';
    const newSublocality = sublocality ? `, ${sublocality}` : '';
    const newLocality = locality ? `, ${locality}` : '';
    const newAdministrativeArea = administrativeArea ? `, ${administrativeArea}` : '';
    const newCountry = country ? `, ${country}` : '';
    const address =  `${streetName}${newStreetNumber}${newSublocality}${newLocality}${newAdministrativeArea}${newCountry}`;
    
    return address;
  };

  useEffect(() => {
    const _searchText = buildAddress(value);
    setSearchText(_searchText);
  }, [value]);

  const fetchAddress = async () => {
    const response = await getAddress({ value: searchText });
    if (response) {
      const { places = [] } = response;
      const newOptions = places.map(({ description = '', details = [] }) => ({ name: description, details }));
      setOptions(newOptions);
    }
  };

  useEffect(() => {
    const time = setTimeout(() => fetchAddress(), 500);
    return () => clearTimeout(time);
  }, [searchText]);

  const handleSearch = (_searchText) => {
    setSearchText(_searchText);
  };

  const onChange = (_value) => {
    if (!_value) {
      handleChange({});
      setOptions([]);
    } else {
      const { details = [] } = _value;
      const newValue = details.reduce((acc, item) => {
        const { type, long_name } = item;
        return { ...acc, [type]: long_name };
      }, {});
      handleChange(newValue);
    }
  };

  return (
    <Autocomplete
      inputValue={searchText}
      options={options}
      disabled={disabled}
      noOptionsText=""
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      onInputChange={(event, newValue) => {
        handleSearch(newValue);
      }}
      autoHighlight
      getOptionLabel={(option) => option.name || ''}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          required={required}
          InputLabelProps={{
            classes: {
              asterisk: classes.asterisk,
            }
          }}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};

AddressInput.propTypes = {
  value: PropTypes.object,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

AddressInput.defaultProps = {
  value: {},
  label: '',
  handleChange: () => { },
  disabled: false,
  required: false,
};

export default AddressInput;