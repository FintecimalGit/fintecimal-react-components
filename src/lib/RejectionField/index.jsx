import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../nodes/BaseTextInput';

import RejectActions from '../nodes/RejectActions';

import useStyles from './style';

const RejectionField = ({
  label,
  value,
  onReject,
  rejectionOptions,
  rejectionData,
  rejected,
  rejectionShowed,
  onHandlerInput,
  showUndo,
  onUndoRejection,
  editable
}) => {
  const classes = useStyles();
  const [forceDisplay, setForceDisplay] = useState('none')

  useEffect(() => {
    setForceDisplay('none');
  }, [rejected]);

  const keep = () => {
    setForceDisplay('inline-block');
  };

  const leave = () => {
    setForceDisplay('none');
  };

  const getStyles = () => rejected ? { 
    display: 'inline-block', 
    right: '10px',
    left: '103%',
    transform: 'translate(50%, 50%)', 
  } : { display: forceDisplay, top: '-45px' };

  const handleUndoRejection = () => {
    setForceDisplay('none');
    onUndoRejection();
  }

  const handlerReject = () => {
    setForceDisplay('none');
    onReject();
  } 

  return (
      <div className={classes.list}>
          <div className={classes.listItemSecondaryContainer}>
            <div
              className={classes.rejectionActions}
              style={getStyles()}
            >
              <RejectActions
                rejectionOptions={rejectionOptions}
                rejected={rejected}
                handlerReject={() => handlerReject()}
                rejectionData={rejectionData}
                onOpen={keep}
                onClose={leave}
                size="small"
                rejectionShowed={rejectionShowed}
                showUndo={showUndo}
                onUndoRejection={() => handleUndoRejection()}
              />
            </div>
          </div>
        <TextInput
              label={label}
              value={value}
              disabled={(!editable) || (!rejected)}
              handleChange={onHandlerInput}
              error={rejected}
              errorMessage={''}
          />
      </div>
  );
};

RejectionField.propTypes = {
  field: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }),
  onReject: PropTypes.func,
  rejectionOptions: PropTypes.array,
  rejectionData: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    reason: PropTypes.string,
    comments: PropTypes.string
  }),
  rejectionShowed: PropTypes.bool,
  editable: PropTypes.bool,
  showUndo: PropTypes.bool,
  onUndoRejection: PropTypes.func,
};

RejectionField.defaultProps = {
  field: { key: '', value: '' },
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
  editable: true,
  showUndo: false,
  onUndoRejection: () => {},
};

export default RejectionField;