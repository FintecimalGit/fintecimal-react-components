import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';
import { InputBase, InputAdornment, IconButton } from '@material-ui/core';

const ENTER_KEY = 13;

const Search = ({ onEnter, placeholder, value, onChange, disabled }) => {
  const classes = useStyles();
  const [currentValue, setCurrentValue] = useState('');

  const onKeyup = event => {
    const { keyCode } = event;
    if (keyCode === ENTER_KEY) onEnter(event);
  };

  const onSearch = event => {
    event.currentTarget.value = currentValue;
    onEnter(event);
  }

  const handleOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setCurrentValue(value);
    onChange(event);
  };

  useEffect(() => {
    setCurrentValue(value)
  }, [value]);

  return (
    <div className={classnames(classes.root, classes.border)}>
      <InputBase
        onKeyUp={onKeyup}
        placeholder={placeholder}
        classes={{
          root: classes.inputContainer,
          input: classes.input
        }}
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
                  aria-label="Search"
                  className={classes.iconButton} 
                  onClick={onSearch}
                >
                  <SearchIcon className={classes.icon} />
            </IconButton>
          </InputAdornment>
        }
        value={currentValue}
        onChange={handleOnChange}
        disabled={disabled}
      />
    </div>
  );
};

Search.propTypes = {
  onEnter: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool
};

Search.defaultProps = {
  onEnter: () => {},
  placeholder: '',
  value: '',
  onChange: () => {},
  disabled: false
};

export default Search;
