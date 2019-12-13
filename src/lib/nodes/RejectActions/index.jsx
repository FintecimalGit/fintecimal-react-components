import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RejectButton, RejectTooltip } from '../index';
import { Popover } from '@material-ui/core';
import RejectionNote from '../../RejectionNote';

const RejectActions = ({
  rejectionData,
  rejectionOptions,
  handlerReject,
  rejected,
  onOpen,
  onClose,
}) => {
  const [mRejected, setRejected] = useState(rejected);
  const [mRejectionData, setRejectionData] = useState(rejectionData);
  const [anchorElement, setAnchorElement] = useState(null);

  const onClick = event => {
    event.stopPropagation();
    onOpen(event);
    setAnchorElement(event.currentTarget);
  };

  const onClickMessage = event => {
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
    </>
  );
};

RejectActions.defaultProps = {
  rejectionData: {},
  rejectionOptions: [],
  onOpen: () => {},
  onClose: () => {},
};

RejectActions.propTypes = {
  rejected: PropTypes.bool.isRequired,
  rejectionData: PropTypes.object,
  rejectionOptions: PropTypes.array,
  handlerReject: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};

export default RejectActions;
