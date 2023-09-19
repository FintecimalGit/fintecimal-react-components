/* eslint-disable react/forbid-prop-types */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

const InputCheckbox = ({
  label,
  value,
  options,
  disabled,
  handleChange,
}) => {
  const [state, setState] = React.useState({});

  const onChange = (event) => {
    const { name: optionName, checked } = event.target;
    setState((prevState) => ({
      ...prevState,
      [optionName]: checked,
    }));
    const formatValue = Array.isArray(value) ? value.map((valueItem) => {
      const { name: nameValueItem } = valueItem;
      if (nameValueItem === optionName) return { name: nameValueItem, checked };
      return valueItem;
    }) : options.map((option) => {
      const { name: nameOption } = option;
      if (nameOption === optionName) return { name: nameOption, checked };
      return { name: nameOption, checked: false };
    });
    handleChange(formatValue);
  };

  const renderOptions = options.map((option) => (
    <FormControlLabel
      key={option.name}
      disabled={disabled}
      control={(
        <Checkbox
          checked={state[option.name] || false}
          onChange={onChange}
          name={option.name}
        />
      )}
      label={option.name}
    />
  ));

  useEffect(() => {
    if (value && Array.isArray(value)) {
      const updatedState = value.reduce((acc, option) => {
        acc[option.name] = option.checked;
        return acc;
      }, {});
      setState(updatedState);
    }
  }, [value]);

  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {renderOptions}
      </FormGroup>
    </>
  );
};

InputCheckbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  handleChange: PropTypes.func,
};

InputCheckbox.defaultProps = {
  label: '',
  value: [],
  disabled: false,
  options: [],
  handleChange: () => {},
};

export default memo(InputCheckbox);
