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

  const objectToString = (_value) => Object.values(_value).reduce((acc, item, index) => {
    if (index == 0) {
      return `${item}`
    }
    return `${acc}, ${item}`
  }, '');

  useEffect(() => {
    const _searchText = objectToString(value);
    setSearchText(_searchText);
  }, []);

  const fetchAddress = async () => {
    const response = await getAddress({ value: searchText });
    if (response) {
      const { predictions = [] } = response;
      const newOptions = predictions
        .filter(({ description = '' }) => description.split(',').length === 5)
        .map(({ description = '' }) => ({ name: description }));
      setOptions(newOptions);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, [searchText]);

  const handleSearch = (_searchText) => {
    setSearchText(_searchText);
  };

  const onChange = (_value) => {
    const { name = '' } = _value;
    const [street = '', suburb = '', municipality = '', state = '', country = ''] = name.split(',');
    const newValue = {
      street: street.trim(),
      suburb: suburb.trim(),
      municipality: municipality.trim(),
      state: state.trim(),
      country: country.trim(),
    };
    handleChange(newValue);
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