import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { borderBottom } from '@material-ui/system';
import { status } from '../commons/utils';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'stretch',
        background: 'whitesmoke',
        padding: 10,
        marginTop: 8,
        marginRight: -1,
        borderLeft: '2px solid lightgray',
        borderTop: '2px solid lightgray',
        borderBottom: '2px solid lightgray',
        borderRadius: 4,
    },
    rootError: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'stretch',
        background: 'whitesmoke',
        padding: 10,
        marginTop: 8,
        marginRight: -1,
        borderLeft: '2px solid rgba(244,67,54,0.7)',
        borderTop: '2px solid rgba(244,67,54,0.7)',
        borderBottom: '2px solid rgba(244,67,54,0.7)',
        borderRadius: 4,
    },
    rootFocus: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'stretch',
        background: 'whitesmoke',
        padding: 10,
        marginTop: 8,
        marginRight: -1,
        borderLeft: '2px solid rgba(63,81,181,0.7)',
        borderTop: '2px solid rgba(63,81,181,0.7)',
        borderBottom: '2px solid rgba(63,81,181,0.7)',
        borderRadius: 4,
    },
    img: {
        flex: '1 1',
        alignSelf: 'stretch',
        marginBottom: 3,
        width: 24,
    },
    text: {
        flex: '0 1',
        alignSelf: 'stretch',
        fontWeight: 'bold',
        margin: 0,
        fontSize: 11,
    }
}));

const getClassByStatus = (inputStatus, classes) => {
    switch(inputStatus) {
        case status.FOCUS: return classes.rootFocus;
        case status.ERROR: return classes.rootError;
        default: return classes.root;
    }
};

const IconText = ({ imgSrc, text, inputStatus }) => {
    const classes = useStyles();
    return (
        <div className={getClassByStatus(inputStatus, classes)}>
            <img src={imgSrc} className={classes.img} />
            <p className={classes.text}>{text}</p>
        </div>
    );
};

IconText.defaultProps = {
    inputStatus: status.NORMAL
};

IconText.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    inputStatus: PropTypes.string,
};

export default IconText;