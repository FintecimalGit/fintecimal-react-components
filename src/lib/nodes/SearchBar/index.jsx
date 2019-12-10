import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';
import { InputBase, InputAdornment } from '@material-ui/core';

const ENTER_KEY = 13;

const Search = ({ onEnter, placeholder }) => {
  const classes = useStyles();

  const onKeyup = event => {
    const { keyCode } = event;
    if (keyCode === ENTER_KEY) onEnter(event);
  };

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
            <SearchIcon className={classes.icon} />
          </InputAdornment>
        }
      />
    </div>
  );
};

Search.propTypes = {
  onEnter: PropTypes.func,
  placeholder: PropTypes.string.isRequired
};

Search.defaultProps = {
  onEnter: () => {}
};

export default Search;
