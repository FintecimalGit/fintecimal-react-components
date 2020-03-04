import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import RejectionButtons from "../RejectionButtons";

import useStyles from './style';

const RejectSimple = ({
                             field,
                             rejected,
                             onReject,
                             rejectionOptions,
                             rejectionData,
                             onAccept
                         }) => {
    const classes = useStyles();
    const { label: title } = field;

    const handlerReject = (data) => {
        onReject(data)
    };

    const handlerAccept = () => {
        onAccept()
    };

    return (
        <div>
            <div className={classes.titleContainer}>
                <div className={classes.titleLine}>
                    <Typography className={classes.title}>
                        { title }
                    </Typography>
                </div>
                <div className={classes.rejectAction}>
                    <RejectionButtons
                        rejectionOptions={rejectionOptions}
                        handlerReject={handlerReject}
                        rejected={rejected}
                        rejectionData={rejectionData}
                        onAccept={handlerAccept}
                    />
                </div>
            </div>
        </div>
    );
};

RejectSimple.propTypes = {
    field: PropTypes.object.isRequired,
    onReject: PropTypes.func.isRequired,
    onAccept: PropTypes.func.isRequired,
    rejectionOptions: PropTypes.array.isRequired,
    rejectionData: PropTypes.object,
};

RejectSimple.defaultProps = {
    field: { label: 'Falta definir field'},
    onReject: () => {},
    onAccept: () => {},
    rejectionOptions: [],
    rejectionData: {
        reason: '',
        comments: ''
    },
};

export default RejectSimple;