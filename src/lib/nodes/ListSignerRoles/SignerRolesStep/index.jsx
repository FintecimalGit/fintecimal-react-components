import React from 'react';
import PropTypes from 'prop-types';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import useStyles from './style';

const SignerRolesStep = ({index, step}) => {
    const classes = useStyles();
    const getClassFromStatus = (complete) => complete ? classes.labelComplete : classes.label;
    const { label, complete } = step;
    return(
        <div key={index} className={classes.content}>
            <p className={getClassFromStatus(complete)}>{label}</p>
            {complete && <CheckCircleIcon className={classes.icon} />}
        </div>
    );
};

SignerRolesStep.propTypes = {
    index: PropTypes.number,
    step: PropTypes.object
};

SignerRolesStep.defaultProps = {
    index: 0,
    step: {}
};


export default SignerRolesStep;