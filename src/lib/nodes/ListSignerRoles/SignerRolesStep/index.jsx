import React from 'react';
import PropTypes from 'prop-types';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import useStyles from './style';

const SignerRolesStep = ({step}) => {
    const classes = useStyles();
    const getClassFromStatus = (complete) => {
        if (complete) return classes.labelComplete;
        return classes.label;
    };

    const { label, complete } = step;
    return(
        <div className={classes.content}>
            <p className={getClassFromStatus(complete)}>{label}</p>
            {complete && <CheckCircleIcon className={classes.icon} />}
        </div>
    );
};

SignerRolesStep.PropTypes = {
    step: PropTypes.object
}


export default SignerRolesStep;