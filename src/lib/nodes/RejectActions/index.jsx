import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RejectButton, RejectTooltip } from '../index';
import { Popover } from '@material-ui/core';
import RejectionNote from '../../RejectionNote';

const RejectActions = ({ rejectionData, rejectionOptions, handlerReject, rejected }) => {
  const [mRejected, setRejected] = useState(rejected);
  const [mRejectionData, setRejectionData] = useState(rejectionData);
  const [anchorElement, setAnchorElement] = useState(null);

  const onClick = event => {
    event.stopPropagation();
    setAnchorElement(event.currentTarget);
  };

  const onClickMessage = event => {
    event.stopPropagation();
    setAnchorElement(event.currentTarget);
  };

  const handleReject = data => {
    const newData = { ...mRejectionData, ...data };
    setRejectionData(newData);
    setRejected(true);
    handlerReject(data);
  };

  const onClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <RejectButton
        noteOpen={Boolean(anchorElement)}
        rejected={mRejected}
        onClick={onClick}
        onClickMessage={onClickMessage}
      />
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
          <RejectionNote onClose={onClose} {...mRejectionData} />
        ) : (
          <RejectTooltip
            active={true}
            onClose={onClose}
            handleReject={handleReject}
            rejectionOptions={rejectionOptions}
          />
        )}
      </Popover>
    </>
  );
};

RejectActions.defaultProps = {
  rejectionData: {},
  rejectionOptions: []
};

RejectActions.propTypes = {
  rejected: PropTypes.bool.isRequired,
  rejectionData: PropTypes.object,
  rejectionOptions: PropTypes.array,
  handlerReject: PropTypes.func.isRequired
};

export default RejectActions;
