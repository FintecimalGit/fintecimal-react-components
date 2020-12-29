import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/es';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import DateMomentUtils from '@date-io/moment';

import useStyles from './style';
import classnames from "classnames";
import { isEmpty } from "../../commons/utils";
import { generateErrorMessagesByLabel, text } from '../../InputStrings';

const BaseDatePicker = ({
  disableToolBar,
  label,
  value,
  onDateChange,
  format,
  disabled,
  minDate,
  required,
  error
}) => {
  const classes = useStyles();

  const [date, setDate] = useState(moment());
  const [mError, setMError] = useState(error);
  const [mLabel, setMLabel] = useState(label);

  /**
   *
   * @param {Date} _date
   */
  const handleDateChange = _date => {
    setDate(_date);
    const formattedDate = format && _date ? moment(_date).format(format) : _date;
    if (!formattedDate && required) {
      setMError(true)
    } else {
      setMError(false)
    }
    onDateChange(formattedDate);
  };

  const mOnBlur = () => {
    if (isEmpty(date) && required) {
      setMError(true)
    } else {
      setMError(false)
    }
  }

  useEffect(() => {
    const mValue = format && value ? moment(value, format) : value;
    setDate(mValue);
  }, [value]);

  useEffect(() => {
    if (error && !mError) {
      setMError(true)
    }
  }, [error])

  useEffect(() => {
    const messageError = generateErrorMessagesByLabel(text, label);
    if (error && !mError) {
      setMError(true)
      setMLabel(messageError.empty)
    }else if (mError) {
      setMLabel(messageError.empty)
    } else {
      setMLabel(label)
    }
  }, [error, mError])

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider locale="es" utils={DateMomentUtils}>
        <KeyboardDatePicker
          className={classnames(
            classes.datePicker,
            { [classes.error]: mError },
          )}
          variant="inline"
          inputVariant="outlined"
          label={mLabel}
          value={date ? date : null}
          format={format}
          onChange={handleDateChange}
          disableToolbar={disableToolBar}
          disabled={disabled}
          minDate={minDate}
          onBlur={mOnBlur}
          InputProps={{
            endAdornment: (
                <IconButton onClick={(e) => {
                  e.stopPropagation();
                  handleDateChange(null)
                }}>
                  <ClearIcon />
                </IconButton>
            )
          }}
          InputAdornmentProps={{
            position: date ? "none" : "end"
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

BaseDatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  format: PropTypes.string,
  onDateChange: PropTypes.func,
  disabled: PropTypes.bool,
  minDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  disableToolBar: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

BaseDatePicker.defaultProps = {
  label: '',
  disableToolBar: false,
  value: null,
  format: '',
  onDateChange: () => {},
  disabled: false,
  minDate: moment().subtract(100, 'years'),
  maxDate: moment().subtract(10, 'years'),
  required: false,
  error: false,
};

export default BaseDatePicker;
