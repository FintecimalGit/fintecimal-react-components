import React from 'react';
import PropTypes from 'prop-types';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import useStyles from './style';

const SignerRolesStep = ({ index, step, onSelectSection }) => {
    const classes = useStyles();
    const getClassFromStatus = (complete) => complete ? classes.labelComplete : classes.label;
    const { label, complete, hidden } = step;
    return (
        <>
            {!hidden && <div key={index} className={classes.content} onClick={onSelectSection}>
                <p className={getClassFromStatus(complete)}>{label}</p>
                {complete && <CheckCircleIcon className={classes.icon} />}
            </div>
            }
        </>
    );
};

SignerRolesStep.propTypes = {
    index: PropTypes.number,
    step: PropTypes.object,
    onSelectSection: PropTypes.func,
    hidden: PropTypes.bool,
};

SignerRolesStep.defaultProps = {
    index: 0,
    step: {},
    onSelectSection: () => { },
    hidden: false,
};


export default SignerRolesStep;
