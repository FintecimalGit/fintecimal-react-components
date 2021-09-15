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

const STATUS ={
  'Rechazado': '#C25B5B',
  'Cargado': '#5BC2C2',
  'Pendiente': '#C1C1C1',
};

const BaseInput = ({
  label,
  value,
  handleChange,
  required,
  error,
  errorMessage,
  disabled,
  type,
  clear,
  onBlur,
  onClear,
  maxLength,
  statusOnly,
  status,
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

  const selectAdorment = () => {
    if (clear && value && !disabled) {
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
            <h3 style={{ color: STATUS[status] }}>{status}</h3>
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
          value={value}
          onChange={handleChange}
          labelWidth={labelWidth}
          onBlur={onBlur}
          className={classes.input}
          inputProps={{
            ...(maxLength ? { maxLength } : {}),
          }}
          endAdornment={selectAdorment()}
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
  status: '',
};

BaseInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  type: PropTypes.string,
  clear: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  statusOnly: PropTypes.bool,
  status: PropTypes.string,
};

export default BaseInput;
