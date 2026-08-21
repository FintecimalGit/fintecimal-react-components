import React, { useState, useEffect, useMemo } from 'react';
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

const LOCALE = 'es';
const TYPEABLE_INPUT_FORMAT = 'DD/MM/YYYY';
const INVALID_DATE_MESSAGE = 'Fecha inválida';
const OUT_OF_RANGE_MESSAGE = 'La fecha está fuera del rango permitido';

moment.locale(LOCALE);

const ONLY_NUMERIC_TOKENS = /^[DMYHhms\s/.,:-]+$/;
const TEXT_TOKENS = /M{3,}|D{3,}/;

/**
 * El KeyboardDatePicker arma su máscara reemplazando cada letra del formato por
 * un guión y sólo acepta dígitos, por lo que los formatos localizados (ll, LL,
 * lll, L...) o con nombre de mes son imposibles de escribir. En esos casos se
 * captura en DD/MM/YYYY y el valor se sigue entregando en el formato pedido.
 * @param {string} format
 * @param {string} inputFormat
 */
const getInputFormat = (format, inputFormat) => {
  if (inputFormat) return inputFormat;
  if (format && ONLY_NUMERIC_TOKENS.test(format) && !TEXT_TOKENS.test(format)) return format;
  return TYPEABLE_INPUT_FORMAT;
};

const buildPlaceholder = (format) => format.replace(/Y/g, 'A');

/**
 * @param {Date|string|moment} value
 * @param {string} format formato en el que viene el valor externo
 */
const parseValue = (value, format) => {
  if (!value) return null;
  if (moment.isMoment(value)) return value.isValid() ? value : null;
  if (value instanceof Date) {
    const fromDate = moment(value);
    return fromDate.isValid() ? fromDate : null;
  }
  if (!isNaN(Date.parse(value))) return moment(value);

  const withFormat = format ? moment(value, format) : null;
  if (withFormat && withFormat.isValid()) return withFormat;

  const fallback = moment(value, [TYPEABLE_INPUT_FORMAT, 'YYYY-MM-DD', moment.ISO_8601]);
  return fallback.isValid() ? fallback : null;
};

const isSameDate = (a, b) => {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (!moment(a).isValid() || !moment(b).isValid()) return false;
  return moment(a).isSame(moment(b));
};

const BaseDatePicker = ({
  disableToolBar,
  label,
  value,
  onDateChange,
  format,
  inputFormat,
  disabled,
  minDate,
  required,
  error
}) => {
  const classes = useStyles();

  const dateInputFormat = useMemo(
    () => getInputFormat(format, inputFormat),
    [format, inputFormat]
  );

  const [date, setDate] = useState(() => parseValue(value, format));
  const [mError, setMError] = useState(error);
  const [mLabel, setMLabel] = useState(label);

  /**
   *
   * @param {moment} _date
   */
  const handleDateChange = _date => {
    setDate(_date);

    if (!_date) {
      setMError(Boolean(required));
      onDateChange(null);
      return;
    }

    setMError(false);
    // Mientras se escribe la fecha llegan valores incompletos: no se propagan
    // para no ensuciar al padre con "Fecha inválida".
    if (!moment(_date).isValid()) return;

    onDateChange(format ? moment(_date).format(format) : _date);
  };

  const mOnBlur = () => {
    if (isEmpty(date) && required) {
      setMError(true)
    } else {
      setMError(false)
    }
  }

  const IsClearDisable = ({ isDisable }) => {
    return isDisable ? null : <IconButton onClick={(e) => {
      e.stopPropagation();
      handleDateChange(null)
    }}>
      <ClearIcon />
    </IconButton>
  }

  useEffect(() => {
    const incoming = parseValue(value, format);
    if (isSameDate(incoming, date)) return;
    // Evita borrar lo que se está escribiendo cuando el padre aún no tiene valor.
    if (!incoming && date && !moment(date).isValid()) return;
    setDate(incoming);
  }, [value, format]);

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
      <MuiPickersUtilsProvider locale={LOCALE} utils={DateMomentUtils}>
        <KeyboardDatePicker
          className={classnames(
            classes.datePicker,
            { [classes.error]: mError },
          )}
          variant="inline"
          inputVariant="outlined"
          label={
            <>
              { mLabel }
              { required &&
                <span className={classes.asterisk}>*</span>
              }
            </>
          }
          value={date}
          format={dateInputFormat}
          placeholder={buildPlaceholder(dateInputFormat)}
          invalidDateMessage={INVALID_DATE_MESSAGE}
          minDateMessage={OUT_OF_RANGE_MESSAGE}
          maxDateMessage={OUT_OF_RANGE_MESSAGE}
          onChange={handleDateChange}
          disableToolbar={disableToolBar}
          disabled={disabled}
          minDate={minDate}
          onBlur={mOnBlur}
          InputProps={{
            endAdornment: (
              <IsClearDisable isDisable={disabled}/>
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
  inputFormat: PropTypes.string,
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
  inputFormat: '',
  onDateChange: () => {},
  disabled: false,
  minDate: moment().subtract(100, 'years'),
  maxDate: moment().subtract(10, 'years'),
  required: false,
  error: false,
};

export default BaseDatePicker;
