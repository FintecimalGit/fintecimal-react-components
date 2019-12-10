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
  onClear
}) => {
  const classes = useStyles();
  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);
  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

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
          value={value}
          onChange={handleChange}
          labelWidth={labelWidth}
          onBlur={onBlur}
          className={classes.input}
          endAdornment={
            clear &&
            value && (
              <InputAdornment position="end">
                <IconButton aria-label="clear input" onClick={onClear}>
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

BaseInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: ''
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
  onBlur: PropTypes.func
};

export default BaseInput;
