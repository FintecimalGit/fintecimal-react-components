import React from 'react';
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

const SpecialInput = ({
  label,
  value,
  handleChange,
  required,
  error,
  errorMessage,
  type,
  clear,
  onBlur,
  onClear,
  children,
  onFocus,
  startAdornment,
  disabled,
  maxLength,
  autoComplete,
}) => {
  const classes = useStyles();
  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, [label, errorMessage]);

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
      <div className={classes.inputBox}>
        <div className={classes.icon}>{children}</div>
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
            className={classes.input}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            labelWidth={labelWidth}
            onBlur={onBlur}
            onFocus={onFocus}
            autoComplete={autoComplete}
            inputProps={{
              ...(maxLength ? { maxLength } : {}),
            }}
            startAdornment={
              startAdornment && (
                <InputAdornment position="start" className={classes.adornment}>
                  {startAdornment}
                </InputAdornment>
              )
            }
            endAdornment={
              value &&
              clear &&
              !disabled && (
                <InputAdornment position="end">
                  <IconButton aria-label="clear input" onClick={onClear} tabIndex="-1">
                    <Clear className={classes.close} />
                  </IconButton>
                </InputAdornment>
              )
            }
            classes={{
              notchedOutline: classes.notchedOutline,
              focused: classes.focusNotchedOutline
            }}
            type={type}
            disabled={disabled}
          />
        </FormControl>
      </div>
      {error && isTextLong(errorMessage) && <LongError text={errorMessage}></LongError>}
    </div>
  );
};

SpecialInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  disabled: false,
  autoComplete: 'off',
};

SpecialInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  required: PropTypes.bool,
  error: PropTypes.bool,
  type: PropTypes.string,
  clear: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  startAdornment: PropTypes.string,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
};

export default SpecialInput;
