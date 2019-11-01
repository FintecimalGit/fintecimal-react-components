import React, { useState, useEffect } from 'react';
import './styles/RadioSwitch.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const ITEMS_SIZE = 2;
const GRAY = '#F2F2F2';
const GRAY_LIGHT = '#989898';


const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: GRAY,
  },
  wrapperChecked: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  wrapperUnchecked: {
    backgroundColor: GRAY,
    color: GRAY_LIGHT
  },
}));

const RadioSwitch = (props) => {
  const [selected, setSelected] = useState(props.selected);

  const onClick = (value) => {
    const { handleChange } = props;
    setSelected(value);
    handleChange(value)
  }

  useEffect(() => {
    setSelected(props.selected);
  }, [props.selected]);

  const { options, checkedColor, uncheckedColor } = props;
  const classes = useStyles();

  return (
    <div
      className={`radio-switch-content ${classes.content}`}
    >
      {
        options.map((item) => {
          const { key, value } = item;
          const checked = key === selected;

          return (
            <label
              key={key}
              htmlFor={key}
              className={`
              radio-switch-wrapper 
              ${checked ? 'radio-switch-wrapper-checked' : ''}
              ${checked ? classes.wrapperChecked : classes.wrapperUnchecked}`}
            >
              <span className="radio-switch">
                <input
                  id={key}
                  type="radio"
                  className="radio-switch-input"
                  checked={checked}
                  value={key}
                  onChange={ev => onClick(ev.target.value)}
                />
              </span>
              <span className="radio-switch">
                {value}
              </span>
            </label>
          );
        })
      }
    </div>
  );
}

RadioSwitch.defaultProps = {
  options: [],
  selected: '',
  handleChange: () => { }
};

RadioSwitch.propTypes = {
  options: (props, propName) => {
    const propLength = props[propName].length;

    if (propLength !== ITEMS_SIZE && propLength > 0) {
      return new Error(
        `Invalid array length ${propLength} (the length must be ${ITEMS_SIZE})`
      );
    }
  },
  selected: PropTypes.string,
  handleChange: PropTypes.func
};

export default RadioSwitch;