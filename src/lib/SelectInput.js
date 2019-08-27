import React from 'react';
import PropTypes from 'prop-types';
import { 
    FormControl, InputLabel, makeStyles, Select, MenuItem,
} from '@material-ui/core';
import '../styles/BaseInput.css';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: theme.spacing(1),
    },
    label: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 14,
      fontWeight: 600,
      opacity: 1,
      color: 'gray'
    },
    input: {
      paddingTop: 25,
      paddingBottom: 12
    },
    notchedOutline: {
      borderWidth: 2,
      borderColor: 'lightgray',
      opacity: 0.7,
    },
    focusNotchedOutline: {
      borderWidth: 3,
      borderColor: '#0099ff',
      opacity: 1,
    },
    asterisk: {
      color: 'red',
      fontSize: 11,
      verticalAlign: 'super'
    }
}));

const SelectInput = ({
    label, value, handleChange, required, error, errorMessage, options,
    clear, onBlur, onClear, onFocus, startAdornment,
  }) => {
    const classes = useStyles();

    return (
    <FormControl
        className={classes.root}
        margin="normal"
        required={required}
        error={error}>
            <InputLabel
            className={classes.label}
            htmlFor="component-simple"
            variant="filled"
            classes={{
            asterisk: classes.asterisk,
            }}
            >{(error && errorMessage) || label}
            </InputLabel>
            <Select
            value={value}
            onChange={handleChange}
            >
                
            </Select>
    </FormControl>
    );
};

SelectInput.defaultProps = {
    value: '',
    required: false,
    error: false,
    type: 'text',
    clear: true,
    errorMessage: ''
};

SelectInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    required: PropTypes.bool,
    error: PropTypes.bool,
    type: PropTypes.string,
    clear: PropTypes.bool,
    errorMessage: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

export default SelectInput;