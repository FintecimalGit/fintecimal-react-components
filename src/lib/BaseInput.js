import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Input, InputLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
    },
}));

const BaseInput = ({ label, type, value, required, error, errorMessage }) => {
    const classes = useStyles();
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">{label}</InputLabel>
      </FormControl>
    );
};

BaseInput.defaultPropTypes = {
    required: false,
    error: false,
    errorMessage: '',
    type: 'text',
    value: ''
};

BaseInput.propTypes = {
    required: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export default BaseInput;