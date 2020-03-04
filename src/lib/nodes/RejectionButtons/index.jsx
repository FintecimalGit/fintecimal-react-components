import React, {useState} from 'react';
import RejectionNote from "../../RejectionNote";
import {RejectTooltip} from "../index";
import {Popover, Button} from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from './style';

const RejectionButtons = ({
  rejectionData,
  rejectionOptions,
  handlerReject,
  rejected,
  onOpen,
  onClose,
  onAccept
}) => {
    const classes = useStyles();
    const [mRejected, setRejected] = useState(rejected);
    const [mRejectionData, setRejectionData] = useState(rejectionData);
    const [anchorElement, setAnchorElement] = useState(null);

    const onClick = event => {
        event.stopPropagation();
        onOpen(event);
        setAnchorElement(event.currentTarget);
    };

    const handleReject = data => {
        const newData = { ...mRejectionData, ...data };
        setRejectionData(newData);
        setRejected(true);
        handlerReject(data);
    };

    const onClosePopOver = (event) => {
        onClose(event);
        setAnchorElement(null);
    };

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={onClick} className={classes.buttons}>
                Rechazar
            </Button>
            <Button variant="contained" color="primary" onClick={onAccept} className={classes.buttons} disabled={mRejected}>
                Aceptar
            </Button>
            <Popover
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                {mRejected ? (
                    <RejectionNote onClose={onClosePopOver} {...mRejectionData} />
                ) : (
                    <RejectTooltip
                        active={true}
                        onClose={onClosePopOver}
                        handleReject={handleReject}
                        rejectionOptions={rejectionOptions}
                    />
                )}
            </Popover>
        </div>
    );
};

RejectionButtons.defaultProps = {
    rejectionData: {},
    rejectionOptions: [],
    onOpen: () => {},
    onClose: () => {},
};

RejectionButtons.propTypes = {
    rejected: PropTypes.bool.isRequired,
    rejectionData: PropTypes.object,
    rejectionOptions: PropTypes.array,
    handlerReject: PropTypes.func.isRequired,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onAccept: PropTypes.func.isRequired,
};

export default RejectionButtons;