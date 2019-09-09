import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  makeStyles,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import LongPlaceHolder from './LongPlaceHolder';
import LongError from './LongError';
import { isTextLong, defaultPlaceHolder } from './commons/utils';
import '../styles/BaseInput.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
    fontFamily: '"Open Sans", sans-serif'
  },
  inputBox: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'stretch',
    alignItems: 'center',
    margin: 0
  },
  icon: {
    flex: 1
  },
  form: {
    flex: 20
  },
  label: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: 14,
    fontWeight: 600,
    opacity: 1,
    color: 'gray'
  },
  input: {
    paddingTop: 25,
    paddingBottom: 12
  },
  notchedOutline: {
    // borderLeft: '1px solid lightgray',
    borderRight: '2px solid lightgray',
    borderTop: '2px solid lightgray',
    borderBottom: '2px solid lightgray',
    opacity: 0.7
  },
  focusNotchedOutline: {
    borderWidth: 3,
    borderColor: '#0099ff',
    opacity: 1
  },
  asterisk: {
    color: 'red',
    fontSize: 11,
    verticalAlign: 'super'
  },
  adornment: {
    marginTop: 12
  }
}));

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
  startAdornment
}) => {
  const classes = useStyles();
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
        <FormControl className={classes.form} margin="normal" required={required} error={error}>
          <InputLabel
            className={classes.label}
            htmlFor="component-simple"
            variant="filled"
            classes={{
              asterisk: classes.asterisk
            }}
          >
            {selectLabel()}
          </InputLabel>
          <OutlinedInput
            id="component-simple"
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            onFocus={onFocus}
            startAdornment={
              startAdornment && (
                <InputAdornment position="start" className={classes.adornment}>
                  {startAdornment}
                </InputAdornment>
              )
            }
            endAdornment={
              clear && (
                <InputAdornment position="end">
                  <IconButton aria-label="clear input" onClick={onClear}>
                    <Clear />
                  </IconButton>
                </InputAdornment>
              )
            }
            inputProps={{
              className: classes.input
            }}
            classes={{
              notchedOutline: classes.notchedOutline,
              focused: classes.focusNotchedOutline
            }}
            type={type}
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
  errorMessage: ''
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
  startAdornment: PropTypes.string
};

export default SpecialInput;
