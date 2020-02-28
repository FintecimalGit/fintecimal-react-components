import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import RejectActions from "../RejectActions";

import useStyles from './style';

const RejectDocuments = ({
                             title,
                             rejected,
                             onReject,
                             url,
                             rejectionOptions,
                             rejectionData
                         }) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.titleContainer}>
                <div className={classes.titleLine}>
                    <Typography className={classes.title}>
                        { title }
                    </Typography>
                </div>
                <div className={classes.rejectAction}>
                    <RejectActions
                        rejectionOptions={rejectionOptions}
                        handlerReject={onReject(title)}
                        rejected={rejected}
                        size="small"
                        rejectionData={rejectionData}
                    />
                </div>
            </div>
            { url ? <iframe title={title} src={url} className={classes.file}/> : "No existe documento"
            }
        </div>
    );
};

RejectDocuments.propTypes = {
    title: PropTypes.string,
    onDrop: PropTypes.func,
    onReject: PropTypes.func,
    url: PropTypes.string,
    rejectionOptions: PropTypes.array,
    rejectionData: PropTypes.object,
};

RejectDocuments.defaultProps = {
    title: '',
    onDrop: () => {},
    onReject: () => {},
    url: '',
    rejectionOptions: [],
    rejectionData: {
        reason: '',
        comments: ''
    },
};

export default RejectDocuments;