import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import useStyles from './style';

import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import LongPlaceHolder from '../../LongPlaceHolder';
import { radio } from '../../InputStrings';

import { isTextLong } from '../../commons/utils';

const RadioGroupInput = ({
  label,
  value,
  handleChange,
  required,
  error,
  errorMessage,
  options,
  disabled,
  handleBlur,
  defaultValue,
}) => {
  console.log('options: ', options);
  const classes = useStyles();

  const { errorMessages, label: defaultPlaceHolder } = radio;


  const [mValue, setValue] = useState(value);
  const [mStatus, setStatus] = useState(status.NORMAL);

  const [mError, setError] = React.useState(false);

  const renderOptions = (listOptions) => {
    console.log('listOptions: ', listOptions);
    const items = listOptions.map((option) => {
      return (
        <FormControlLabel
          className={classes.optionLabel}
          value={option.name}
          control={<Radio className={classes.smallRadioButton} />}
          label={<Typography className={classes.option}>{option.name}</Typography>}
        />
      );
    });
    return items;
  };

  const mHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    handleChange(value);
    setError(false);
    setValue(value);
    setStatus(status.NORMAL);
  };

  useEffect(() => {
    console.log('mValue: ', mValue);
    console.log('value: ', value);
    if (mValue !== value) {
      setValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (error && !mError) {
      const { empty } = errorMessages;
      setError(true);
      setErrorMessage(empty);
    }
  }, [error, mError]);

  const checkDisabled = useMemo(() => {
    if (options.length === 0) return true;
    return disabled;
  }, [options, disabled]);

  return (
    <div>
      {isTextLong(label) && (
        <div className={classes.longPlaceHolder}>
          <LongPlaceHolder text={label} />
        </div>
      )}
      <FormControl className={classes.form} required={required} error={mError} disabled={checkDisabled}>
        {!isTextLong(label) && (
          <FormLabel
            className={classes.label}
            classes={{
              asterisk: classes.asterisk,
            }}
          >
            {label}
          </FormLabel>
        )}
        <RadioGroup value={mValue} defaultValue={defaultValue} onChange={mHandleChange}>
          {renderOptions(options)}
        </RadioGroup>
      </FormControl>
      {mError && isTextLong(mErrorMessage) && <LongError text={mErrorMessage}></LongError>}
    </div>
  );
};

RadioGroupInput.defaultProps = {
  value: '',
  required: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  placeholder: '',
  disabled: false,
};

RadioGroupInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  required: PropTypes.bool,
  error: PropTypes.bool,
  clear: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  handleBlur: PropTypes.func,
};

export default RadioGroupInput;
