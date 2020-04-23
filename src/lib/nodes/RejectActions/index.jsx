import React, { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { RejectButton, RejectTooltip } from '../index';
import { Popover } from '@material-ui/core';
import RejectionNote from '../../RejectionNote';

import useClickOutside from '../../../hooks/useClickOutside';

const RejectActions = ({
  rejectionData,
  rejectionOptions,
  handlerReject,
  rejected,
  onOpen,
  onClose,
  size,
  rejectionShowed,
  showUndo,
  onUndoRejection
}) => {
  const [mRejected, setRejected] = useState(rejected);
  const [mRejectionData, setRejectionData] = useState(rejectionData);
  const [anchorElement, setAnchorElement] = useState(null);
  const [showPopover, setShowPopover] = useState(false);

  const noteRef = createRef();

  useEffect(() => {
    setRejected(rejected);
  }, [rejected]);

  useClickOutside(noteRef, () => {
    if (showPopover) {
      onClosePopOver();
    }
  });

  const onClick = event => {
    event.stopPropagation();
    onOpen(event);
    setAnchorElement(event.currentTarget);
    setShowPopover(true);
  };

  const onClickMessage = event => {
    event.stopPropagation();
    onOpen(event);
    setAnchorElement(event.currentTarget);
    setShowPopover(true);
  };

  const handleReject = data => {
    const newData = { ...mRejectionData, ...data };
    setRejected(true);
    setRejectionData(newData);
    handlerReject(data);
    setShowPopover(!showUndo);
  };

  const onClosePopOver = (event) => {
    onClose(event);
    setAnchorElement(null);
    setShowPopover(false);
  };

  const handleUndoRejection = () => {
    setShowPopover(false);
    onUndoRejection();
  }

  if (rejectionShowed === false) return null;

  return (
    <>
      <RejectButton
        noteOpen={showPopover}
        rejected={mRejected}
        onClick={onClick}
        onClickMessage={onClickMessage}
        size={size}
        editable={mRejected}
      />
      <Popover
        anchorEl={anchorElement}
        open={showPopover}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        {mRejected && showPopover ? (
          <RejectionNote
            onClose={onClosePopOver}
            {...mRejectionData}
            showUndo={showUndo}
            onUndoRejection={() => handleUndoRejection()}
            ref={noteRef}
          />
        ) : (showPopover && 
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
  onOpen: () => { },
  onClose: () => { },
  size: 'large',
  rejectionShowed: true,
  showUndo: false,
  onUndoRejection: () => { }
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
  showUndo: PropTypes.bool,
  onUndoRejection: PropTypes.func,
};

export default RejectActions;
