import React, { useState } from 'react';
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
  onHandlerInput
}) => {
  const classes = useStyles();
  const [forceDisplay, setForceDisplay] = useState('none')

  const keep = () => {
    setForceDisplay('inline-block');
  };

  const leave = () => {
    setForceDisplay('none');
  };

  /**
   * @returns {String}
   */
  const getRejectionActionsDisplay = () => rejected ? 'inline-block' : forceDisplay;

  const getRejectionActionsTop = () => rejected ? '-20px' : '-45px';

  return (
      <div className={classes.list}>
          <div className={classes.listItemSecondaryContainer}>
            <div
              className={classes.rejectionActions}
              style={{ display: getRejectionActionsDisplay(), top: getRejectionActionsTop() }}
            >
              <RejectActions
                rejectionOptions={rejectionOptions}
                rejected={rejected}
                handlerReject={onReject}
                rejectionData={rejectionData}
                onOpen={keep}
                onClose={leave}
                size="small"
                rejectionShowed={rejectionShowed}
              />
            </div>
          </div>
        <TextInput
              label={label}
              value={value}
              disabled={!rejected}
              handleChange={onHandlerInput}
              error={rejected}
              errorMessage={'dist/RejectionField/index.js'}
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
    comments: ''
  },
  rejected: false,
  rejectionShowed: true,
  editable: false
};

export default RejectionField;