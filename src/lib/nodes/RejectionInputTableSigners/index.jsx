import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { defaultHeaderSigner } from './defaults';

import RejectActions from '../RejectActions';

import useStyles from './style';
import RejectInputTableSigners from '../RejectInputTableSigners';
import { defaultRejectDataSigner } from '../RejectInputTableSigners/defaults';

const RejectionInputTableSigners = ({
  onReject,
  rejectionOptions,
  rejectionData,
  rejected,
  rejectionShowed,
  showUndo,
  onUndoRejection,
  hideActions,

  value,
  headers,
  handleHeadersAndValues,
  error,
  required,
  maxHeaders,
  disabled,
}) => {
  const classes = useStyles();
  const [forceDisplay, setForceDisplay] = useState('none');
  

  useEffect(() => {
    setForceDisplay('none');
  }, [rejected]);

  const keep = () => {
    setForceDisplay('inline-block');
  };

  const leave = () => {
    setForceDisplay('none');
  };

  const getStyles = () => (rejected ? {
    display: 'inline-block',
    right: '10px',
    left: '103%',
    transform: 'translate(50%, 50%)',
  } : { display: forceDisplay, top: '-45px' });

  const handleUndoRejection = () => {
    setForceDisplay('none');
    onUndoRejection();
  };

  const handlerReject = (value) => {
    setForceDisplay('none');
    onReject(value);
  };

  return (
    <div className={classes.list}>
      <div className={classes.listItemSecondaryContainer}>
          { 
            !hideActions &&
            (
              <div
                className={classes.rejectionActions}
                style={getStyles()}
              >
                <RejectActions
                  rejectionOptions={rejectionOptions}
                  rejected={rejected}
                  handlerReject={(value) => handlerReject(value)}
                  rejectionData={rejectionData}
                  onOpen={keep}
                  onClose={leave}
                  size="small"
                  rejectionShowed={rejectionShowed}
                  showUndo={showUndo}
                  onUndoRejection={() => handleUndoRejection()}
                />
              </div>
            )
          }
      </div>
      <RejectInputTableSigners
        value={value}
        headers={headers}
        handleHeadersAndValues={handleHeadersAndValues}
        error={error}
        required={required}
        maxHeaders={maxHeaders}
        disabled={disabled}
      />
    </div>
  );
};

RejectionInputTableSigners.propTypes = {
  onReject: PropTypes.func,
  rejectionOptions: PropTypes.array,
  rejectionData: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    reason: PropTypes.string,
    comments: PropTypes.string,
  }),
  rejected: PropTypes.bool,
  rejectionShowed: PropTypes.bool,
  showUndo: PropTypes.bool,
  onUndoRejection: PropTypes.func,
  hideActions: PropTypes.bool,

  value: PropTypes.array,
  headers: PropTypes.array,
  handleHeadersAndValues: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

RejectionInputTableSigners.defaultProps = {
  onReject: () => {},
  rejectionOptions: [],
  rejectionData: {
    name: '',
    image: '',
    date: new Date(),
    reason: '',
    comments: '',
  },
  rejected: false,
  rejectionShowed: true,
  showUndo: false,
  onUndoRejection: () => {},
  hideActions: false,

  value: defaultRejectDataSigner,
  headers: defaultHeaderSigner,
  required: false,
  error: false,
  handleHeadersAndValues: () => {},
  disabled: false,
};

export default RejectionInputTableSigners;
