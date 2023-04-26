import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';
import { Clear } from '@material-ui/icons';
import useStyles from './style';
import { InputBase, InputAdornment, IconButton } from '@material-ui/core';

const ENTER_KEY = 13;

const Search = ({
  onEnter,
  placeholder,
  value,
  onChange,
  disabled,
  id,
  clear,
}) => {
  const classes = useStyles();
  const [currentValue, setCurrentValue] = useState('');
  const [showSearch, setShowSearch] = useState(true);

  const onKeyup = event => {
    const { keyCode } = event;
    if (keyCode === ENTER_KEY) {
      onEnter(event);
      setShowSearch(false);
    }
  };

  const onClearChange = (event) => {
    const newTarget = {...event.target, value: ''};
    setShowSearch(true);
    setCurrentValue('');
    onChange({ ...event, target: newTarget });
    onEnter({ ...event, target: newTarget });
  };

  const onSearch = event => {
    event.currentTarget.value = currentValue;
    onEnter(event);
    setShowSearch(false);
  }

  const handleOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setCurrentValue(value);
    onChange(event);
    setShowSearch(true);
  };

  const selectAdorment = () => {
    if (!showSearch && clear && value && !disabled) {
      return (
        <InputAdornment position="end">
            <IconButton
              aria-label="clear input"
              className={classes.iconButton}
              onClick={onClearChange}
              tabIndex="-1">
                <Clear /*className={classes.icon}*/ />
            </IconButton>
        </InputAdornment>
      );
    }
    return (
      <InputAdornment position="end">
            <IconButton
                  id={id}
                  aria-label="Search"
                  className={classes.iconButton} 
                  onClick={onSearch}
                >
                  <SearchIcon className={classes.icon} />
            </IconButton>
          </InputAdornment>
    );
  };

  useEffect(() => {
    setCurrentValue(value)
  }, [value]);

  return (
    <div className={classnames(classes.root, classes.border)}>
      <InputBase
        id={id}
        onKeyUp={onKeyup}
        placeholder={placeholder}
        classes={{
          root: classes.inputContainer,
          input: classes.input
        }}
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={
          selectAdorment()
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
  disabled: PropTypes.bool,
  clear: PropTypes.bool,
};

Search.defaultProps = {
  onEnter: () => {},
  placeholder: '',
  value: '',
  onChange: () => {},
  disabled: false,
  clear: false,
};

export default Search;
