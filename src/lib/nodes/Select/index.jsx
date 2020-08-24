import React, { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { status, isEmpty, isTextLong } from '../../commons/utils';
import LongPlaceHolder from '../../LongPlaceHolder';
import LongError from '../../LongError';
import { list } from '../../InputStrings';
import useStyles from './style';
import '../../styles/BaseInput.css';

const isCategory = option => option.children && option.children.length > 0;
const getClassByStatus = (inputStatus, classes) => {
  switch (inputStatus) {
    case status.FOCUS:
      return classes.focus;
    case status.ERROR:
      return classes.error;
    default:
      return classes.normal;
  }
};

const SelectInput = ({
  label,
  value,
  handleChange,
  required,
  error,
  errorMessage,
  options,
  disabled,
  placeholder,
  handleBlur,
}) => {
  const classes = useStyles();
  const labelRef = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const { errorMessages, label: defaultPlaceHolder } = list;
  const [mValue, setValue] = useState(value);
  const [mError, setError] = useState(error);
  const [mErrorMessage, setErrorMessage] = useState(errorMessage);
  const [mStatus, setStatus] = useState(status.NORMAL);
  const [mOpen, setOpen] = useState(false);

  const renderItem = info => {
    const { name, index, category = true, parentName = '' } = info;
    return (
      <MenuItem
        disabled={category}
        key={`${parentName}_${name}_${index}`}
        className={category ? classes.category : classes.item}
        value={parentName ? `${parentName} - ${name}` : name}
        classes={{
          disabled: classes.disabled
        }}
      >
        {name}
      </MenuItem>
    );
  };

  const selectLabel = () => {
    if (mError) {
      if (isTextLong(mErrorMessage)) {
        if (isTextLong(label)) return defaultPlaceHolder;
        return label;
      }
      return mErrorMessage;
    } else {
      if (isTextLong(label)) return defaultPlaceHolder;
      return label;
    }
  };

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const renderChildren = (children, items, parentName = '') => {
    children.map((child, index) => {
      const { name, children } = child;
      const info = { name, index, parentName };
      if (isCategory(child)) {
        items.push(renderItem(info));
        return renderChildren(children, items, name);
      }
      const newInfo = { ...info, category: false };
      items.push(renderItem(newInfo));
    });
  };

  const renderPlaceholder = ({ name }) => (
    <MenuItem disabled key={`placeholder_${name}_-1`} className={classes.item} value="">
      {name}
    </MenuItem>
  );

  const renderOptions = listOptions => {
    const items = [];
    if (placeholder) items.push(renderPlaceholder({ name: placeholder }));
    renderChildren(listOptions, items);
    return items;
  };

  const mHandleChange = event => {
    const {
      target: { value }
    } = event;
    handleChange(value);
    setError(false);
    setValue(value);
    setStatus(status.NORMAL);
  };

  const mOnFocus = () => {
    setStatus(status.FOCUS);
  };

  const mOnBlur = () => {
    const { empty } = errorMessages;
    if (isEmpty(mValue) && required) {
      setError(true);
      setErrorMessage(empty);
    } else {
      setError(false);
      handleBlur()
    }
    setStatus(status.NORMAL);
  };

  useEffect(() => {
    setValue(value);
    setLabelWidth(labelRef.current.offsetWidth);
  }, [label, errorMessage]);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const checkDisabled = useMemo(() => {
    if (options.length === 0) return true;
    return disabled;
  }, [options, disabled]);
  
  return (
    <div className={classes.root}>
      {isTextLong(label) && (
        <div>
          <LongPlaceHolder text={label} />
        </div>
      )}
      <FormControl className={classes.form} required={required} error={mError} variant="outlined">
        <InputLabel
          ref={labelRef}
          className={classes.label}
          htmlFor="component-outlined"
          variant="outlined"
          classes={{
            asterisk: classes.asterisk,
          }}
        >
          {selectLabel()}
        </InputLabel>
        <Select
          renderValue={() => mValue || placeholder}
          value={mValue}
          onChange={mHandleChange}
          onBlur={mOnBlur}
          onFocus={mOnFocus}
          onOpen={open}
          onClose={close}
          IconComponent={mOpen ? KeyboardArrowUp : KeyboardArrowDown}
          classes={{
            icon: classes.icon
          }}
          MenuProps={{
            getContentAnchorEl: null,
            classes: {
              paper: mError
                ? getClassByStatus(status.ERROR, classes)
                : getClassByStatus(mStatus, classes)
            }
          }}
          input={
            <OutlinedInput
              id="component-outlined"
              labelWidth={labelWidth}
              className={classes.input}
              classes={{
                notchedOutline: classes.notchedOutline,
                focused: classes.focusNotchedOutline
              }}
              disabled={checkDisabled}
            />
          }
        >
          {renderOptions(options)}
        </Select>
      </FormControl>
      {mError && isTextLong(mErrorMessage) && <LongError text={mErrorMessage}></LongError>}
    </div>
  );
};

SelectInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  placeholder: '',
  disabled: false,
  handleBlur: () => {},
};

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  required: PropTypes.bool,
  error: PropTypes.bool,
  clear: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  handleBlur: PropTypes.func,
};

export default SelectInput;
