import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'moment/locale/es';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateMomentUtils from '@date-io/moment';
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

import useStyles from './style';

const DatePicker = ({
  label,
  value,
  onDateChange,
  format,
  disabled,
  minDate,
}) => {
  const classes = useStyles();

  const [date, setDate] = useState(value);
  const [showModal, setShowModal] = useState(false);

  /**
   *
   * @param {Date} _date
   */
  const handleDateChange = (_date) => {
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
          onClick={() => setShowModal(true)}
          onClose={() => setShowModal(false)}
          open={showModal}
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

DatePicker.propTypes = {
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

DatePicker.defaultProps = {
  label: '',
  value: null,
  format: 'DD/MM/YYYY',
  onDateChange: () => { },
  disabled: false,
  minDate: '',
};

export default DatePicker;