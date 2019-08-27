import React from 'react';
import PropTypes from 'prop-types';
import { 
    FormControl, OutlinedInput, InputLabel, makeStyles, InputAdornment,
    IconButton,
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import '../styles/BaseInput.css';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: theme.spacing(1),
    },
    icon: {
        flex: 1,
    },
    form: {
        flex: 20,
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
       //borderLeft: '1px solid lightgray',
       borderRight: '2px solid lightgray',
       borderTop: '2px solid lightgray',
       borderBottom: '2px solid lightgray',
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
    },
    adornment: {
        marginTop: 12,
    },
}));

const BaseInput = ({
    label, value, handleChange, required, error, errorMessage, type, 
    clear, onBlur, onClear, onKeyDown, children, onFocus, startAdornment,
  }) => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <div className={classes.icon}>
            { children }
        </div>
        <FormControl
        className={classes.form}
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
            <OutlinedInput 
            id="component-simple"
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            onFocus={onFocus}
            startAdornment={
                startAdornment && 
                <InputAdornment position="start" className={classes.adornment}>
                { startAdornment }
                </InputAdornment>
            }
            endAdornment={ clear && 
            <InputAdornment position="end">
            <IconButton
                aria-label="clear input"
                onClick={onClear}
            >
                <Clear/>
            </IconButton>
            </InputAdornment>}
            inputProps={{
            className: classes.input,
            }}
            classes={{
            notchedOutline: classes.notchedOutline,
            focused: classes.focusNotchedOutline,
            }}
            type={type}
            />
        </FormControl>
    </div>
    );
};

BaseInput.defaultProps = {
    value: '',
    required: false,
    error: false,
    type: 'text',
    clear: true,
    errorMessage: ''
};

BaseInput.propTypes = {
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
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    startAdornment: PropTypes.string,
};

export default BaseInput;