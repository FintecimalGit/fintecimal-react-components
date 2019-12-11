import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'moment/locale/es';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateMomentUtils from '@date-io/moment';

import useStyles from './style';

const DatePicker = ({ label, value, onDateChange, format }) => {
  const classes = useStyles();

  const [date, setDate] = useState(value);

  /**
   *
   * @param {Date} _date
   */
  const handleDateChange = (_date) =>  {
    setDate(_date);
    onDateChange(_date);
  };

  useEffect(() => {
    setDate(value);
  }, [value])

  return (
    <MuiPickersUtilsProvider locale="es" utils={DateMomentUtils}>
      <KeyboardDatePicker
          className={classes.datePicker}
          variant="inline"
          inputVariant="outlined"
          label={label}
          value={date}
          format={format}
          onChange={handleDateChange}
          disableToolbar
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
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