import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'moment/locale/es';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateMomentUtils from '@date-io/moment';

import useStyles from './style';

const BaseDatePicker = ({
                      label,
                      value,
                      onDateChange,
                      format,
                      disabled,
                      minDate,
                    }) => {
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
    <div className={classes.root}>
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
          disabled={disabled}
          minDate={minDate}

        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

BaseDatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  format: PropTypes.string,
  onDateChange: PropTypes.func,
  disabled: PropTypes.bool,
  minDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
};

BaseDatePicker.defaultProps = {
  label: '',
  value: null,
  format: 'DD/MM/YYYY',
  onDateChange: () => {},
  disabled: false,
  minDate: '',
};

export default BaseDatePicker;