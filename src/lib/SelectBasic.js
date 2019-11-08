import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
    color: theme.palette.text.primary
  },
  placeholderHidden: {
    display: 'none',
  },
  paper: {
    maxHeight: '180px !important',
  }
}));

const SelectBasic = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const [showLabel, setShowLabel] = useState(!props.selected);

  const handleChange = event => {
    const { onChange } = props;
    setSelected(event.target.value);
    onChange(event.target.value);
    setShowLabel(false);
  };

  useEffect(() => {
    setSelected(props.selected);
  }, [props.selected]);

  const { options, placeholder, onClose } = props;
  const { onOpen } = props;
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
          onClose={() => {
            setShowLabel(!selected);
            onClose();
          }}
          onOpen={() => onOpen()}
          MenuProps={{
            classes: {
              paper: classes.paper
            },
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          {
            options.map((option, index) => {
              const { value, name } = option;
              return <MenuItem key={index} value={value}>{name}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}

SelectBasic.defaultProps = {
  placeholder: '',
  options: [],
  selected: '',
  onClose: () => { },
  onOpen: () => { },
  onChange: () => { },
};

SelectBasic.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.string,
  placeholder: PropTypes.string,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onChange: PropTypes.func,
};

export default SelectBasic;
