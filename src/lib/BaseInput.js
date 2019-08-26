import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, OutlinedInput, InputLabel, makeStyles } from '@material-ui/core';
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
    }
}));

const BaseInput = ({ label, value, handleChange, required, error }) => {
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
        >{label}
        </InputLabel>
        <OutlinedInput 
        id="component-simple"
        value={value}
        onChange={handleChange}
        required={true}
        inputProps={{
          className: classes.input,
        }}
        />
      </FormControl>
    );
};

BaseInput.defaultPropTypes = {
    value: '',
    required: false,
    error: false,
};

BaseInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    required: PropTypes.bool,
    error: PropTypes.bool,
};

export default BaseInput;