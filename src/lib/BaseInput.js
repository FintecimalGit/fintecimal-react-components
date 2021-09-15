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
import './styles/BaseInput.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: theme.spacing(1)
  },
  form: {
    alignSelf: 'stretch'
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    opacity: 1
  },
  input: {
    paddingTop: 25,
    paddingBottom: 12
  },
  notchedOutline: {
    borderWidth: 2,
    opacity: 0.7
  },
  focusNotchedOutline: {
    borderWidth: 3,
    opacity: 1
  },
  asterisk: {
    color: theme.palette.error.main,
    fontSize: 13,
    verticalAlign: 'super'
  },
  icon: {
    fontSize: 22
  }
}));

const BaseInput = ({
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
  disabled,
  statusOnly
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
  const selectAdorment = () => {
    if (clear && !disabled) {
      return (
        <InputAdornment position="end">
            <IconButton aria-label="clear input" onClick={onClear} tabIndex="-1">
                <Clear /*className={classes.icon}*/ />
            </IconButton>
        </InputAdornment>
      );
    } else if(disabled && statusOnly) {
      return (
        <InputAdornment position="end">
            <h3>Cargado</h3>
        </InputAdornment>
      );
    }
  };

  return (
    <div className={classes.root}>
      {isTextLong(label) && (
        <div>
          <LongPlaceHolder text={label} />
        </div>
      )}
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
          endAdornment={selectAdorment()}
          inputProps={{
            className: classes.input
          }}
          classes={{
            notchedOutline: classes.notchedOutline,
            focused: classes.focusNotchedOutline
          }}
          type={type}
          disabled={disabled}
        />
      </FormControl>
      {error && isTextLong(errorMessage) && <LongError text={errorMessage}></LongError>}
    </div>
  );
};

BaseInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  disabled: false,
  statusOnly: false,
};

BaseInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  required: PropTypes.bool,
  error: PropTypes.bool,
  type: PropTypes.string,
  clear: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  status: PropTypes.bool,
};

export default BaseInput;
