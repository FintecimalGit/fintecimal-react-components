import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import LongPlaceHolder from '../../LongPlaceHolder';
import LongError from '../../LongError';
import { isTextLong, defaultPlaceHolder } from '../../commons/utils';
import useStyles from './style';
import '../../styles/BaseInput.css';

const TextAreaInput = ({
  label,
  value,
  handleChange,
  required,
  error,
  errorMessage,
  type,
  clear,
  onBlur,
  onClear
}) => {
  const classes = useStyles();
  const [labelWidth, setLabelWidth] = useState(0);
  const [mValue, setValue] = useState(value);
  const labelRef = useRef(null);
  useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const mHandleChange = event => {
    const {
      target: { value: eventValue }
    } = event;
    setValue(eventValue);
    handleChange(eventValue);
  };

  const mOnClear = () => {
    setValue('');
    handleChange('');
    onClear('');
  };

  const selectLabel = () => {
    if (error) {
      if (isTextLong(errorMessage)) {
        if (isTextLong(label)) return defaultPlaceHolder;
        return label;
      }
      return errorMessage;
    } else {
      if (isTextLong(label)) return defaultPlaceHolder;
      return label;
    }
  };
  return (
    <div className={classes.root}>
      {isTextLong(label) && (
        <div>
          <LongPlaceHolder text={label} />
        </div>
      )}
      <FormControl className={classes.form} required={required} error={error} variant="outlined">
        <InputLabel
          ref={labelRef}
          className={classes.label}
          htmlFor="component-outlined"
          variant="outlined"
          classes={{
            asterisk: classes.asterisk
          }}
        >
          {selectLabel()}
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={mValue}
          multiline
          rows="4"
          onChange={mHandleChange}
          labelWidth={labelWidth}
          onBlur={onBlur}
          className={classes.input}
          endAdornment={
            clear &&
            mValue && (
              <InputAdornment position="end">
                <IconButton aria-label="clear input" onClick={mOnClear}>
                  <Clear className={classes.icon} />
                </IconButton>
              </InputAdornment>
            )
          }
          classes={{
            notchedOutline: classes.notchedOutline,
            focused: classes.focusNotchedOutline
          }}
          type={type}
        />
      </FormControl>
      {error && isTextLong(errorMessage) && <LongError text={errorMessage}></LongError>}
    </div>
  );
};

TextAreaInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  onClear: () => {}
};

TextAreaInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  required: PropTypes.bool,
  error: PropTypes.bool,
  type: PropTypes.string,
  clear: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onClear: PropTypes.func
};

export default TextAreaInput;
