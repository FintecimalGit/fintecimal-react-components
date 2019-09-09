import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    longText: {
        alignSelf: 'stretch',
        color: 'rgba(244,67,54)',
        fontSize: 11,
        textAlign: 'justify',
        marginTop: 0,
        padding: 5,
      }
}));

const LongError = ({ text }) => {
    const classes= useStyles();
    return (
        <p className={classes.longText}>
            {text}
        </p>
    );
};

LongError.propTypes = {
    text: PropTypes.string.isRequired,
};

export default LongError;