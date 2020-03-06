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
  size,
  rejectionShowed,
  editable,
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

  if (rejectionShowed === false) return null;

  return (
    <>
      <RejectButton
        noteOpen={Boolean(anchorElement)}
        rejected={mRejected}
        onClick={onClick}
        onClickMessage={onClickMessage}
        size={size}
        editable={editable}
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
  size: 'large',
  rejectionShowed: true,
  editable: false,
};

RejectActions.propTypes = {
  rejected: PropTypes.bool.isRequired,
  rejectionData: PropTypes.object,
  rejectionOptions: PropTypes.array,
  handlerReject: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['large', 'small']),
  rejectionShowed: PropTypes.bool,
  editable: PropTypes.bool,
};

export default RejectActions;
