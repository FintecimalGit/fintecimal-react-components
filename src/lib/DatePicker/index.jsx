import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import "moment/locale/es";

import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateMomentUtils from '@date-io/moment';

import useStyles from './style';

const DatePicker = ({ label, value, onDateChange, format }) => {
  const classes = useStyles();

  const [date, setDate] = useState(value);

  /**
   *
   * @param {Date} _date
   * @returns {Date}
   */
  const formatDate = _date => moment(_date).format(format);

  const handleDateChange = (date) =>  {
    const _date = formatDate(date);
    setDate(_date);
    onDateChange(_date);
  };

  useEffect(() => {
    const newDate = formatDate(value);
    setDate(newDate);
  }, [value])

  return (
    <MuiPickersUtilsProvider locale="es" utils={DateMomentUtils}>
      <KeyboardDatePicker
          className={classes.datePicker}
          variant="inline"
          inputVariant="outlined"
          label={label}
          value={formatDate(date)}
          format={format}
          onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  format: PropTypes.string,
  onDateChange: PropTypes.func,
};

DatePicker.defaultProps = {
  label: '',
  value: new Date(),
  format: 'D/M/Y',
  onDateChange: () => {},
};

export default DatePicker;