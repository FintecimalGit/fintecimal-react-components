import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles/SelectBasic.css';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  content: {
    position: 'relative',
    width: '100%',
  },
  placeholder: {
    position: 'absolute',
    top: 'calc(50% - 12px)',
  },
  placeholderHidden: {
    display: 'none',
  },
}));

const SelectBasic = (props) => {
  const [selected, setSelected] = useState('');
  const [showLabel, setShowLabel] = useState(true);

  const handleChange = event => {
    setSelected(event.target.value);
    setShowLabel(false);
  };

  const { options, placeholder } = props;
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.content}>
        <div
          className={showLabel ? classes.placeholder : classes.placeholderHidden}
        >
          {placeholder}
        </div>
        <Select
          value={selected}
          onChange={handleChange}
          onClose={() => setShowLabel(!Boolean(selected))}
          MenuProps={{
            classes: {
              paper: 'select-basic-paper'
            },
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          {
            options.map(option => {
              const { value, name } = option;
              return <MenuItem value={value}>{name}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}

SelectBasic.defaultProps = {
  placeholder: '',
  options: []
};

SelectBasic.propTypes = {
  options: PropTypes
};

export default SelectBasic;
