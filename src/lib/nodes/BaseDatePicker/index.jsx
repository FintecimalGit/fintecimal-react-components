import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/es';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateMomentUtils from '@date-io/moment';

import useStyles from './style';

const BaseDatePicker = ({
  disableToolBar,
  label,
  value,
  onDateChange,
  format,
  disabled,
  minDate
}) => {
  const classes = useStyles();

  const [date, setDate] = useState(moment());

  /**
   *
   * @param {Date} _date
   */
  const handleDateChange = _date => {
    setDate(_date);
    const formattedDate = format ? moment(_date).format(format) : _date;
    onDateChange(formattedDate);
  };

  useEffect(() => {
    const mValue = format && value ? moment(value, format) : value;
    setDate(mValue);
  }, [value]);

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider locale="es" utils={DateMomentUtils}>
        <KeyboardDatePicker
          className={classes.datePicker}
          variant="inline"
          inputVariant="outlined"
          label={label}
          value={date ? date : null}
          format={format}
          onChange={handleDateChange}
          disableToolbar={disableToolBar}
          disabled={disabled}
          minDate={minDate}
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
  disableToolBar: PropTypes.bool
};

BaseDatePicker.defaultProps = {
  label: '',
  disableToolBar: false,
  value: null,
  format: '',
  onDateChange: () => {},
  disabled: false,
  minDate: moment().subtract(100, 'years'),
  maxDate: moment().subtract(10, 'years')
};

export default BaseDatePicker;
