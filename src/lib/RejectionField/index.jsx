import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CustomField from './component/CustomField';

import RejectActions from '../nodes/RejectActions';

import useStyles from './style';

const RejectionField = ({
  field,
  onReject,
  rejectionOptions,
  rejectionData,
  rejected,
  rejectionShowed,
  onHandlerInput,
  showUndo,
  onUndoRejection,
  editable,
}) => {
  const {
    fieldType: type = '', label = '', value = '', config = {},
  } = field;
  const { required = false, data = '', minDate = '' } = config;
  const classes = useStyles();
  const [mvalue, setValue] = useState(value);
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

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleBlur = () => {
    if (mvalue && mvalue !== '')onHandlerInput(mvalue);
  };

  const handleDatechange = (newValue) => {
    onHandlerInput(newValue.toString());
  };

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
      </div>
      <CustomField
        type={type}
        label={label}
        value={mvalue}
        disabled={(!editable) || (!rejected)}
        handleChange={handleChange}
        onDateChange={handleDatechange}
        error={rejected}
        errorMessage=""
        handleBlur={handleBlur}
        options={config}
        required={required}
        data={data}
        minDate={minDate}
        error={rejected}
        errorMessage=""
      />
    </div>
  );
};

RejectionField.propTypes = {
  field: PropTypes.object,
  onReject: PropTypes.func,
  rejectionOptions: PropTypes.array,
  rejectionData: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    reason: PropTypes.string,
    comments: PropTypes.string,
  }),
  rejectionShowed: PropTypes.bool,
  onHandlerInput: PropTypes.func,
  editable: PropTypes.bool,
  showUndo: PropTypes.bool,
  onUndoRejection: PropTypes.func,
};

RejectionField.defaultProps = {
  field: {},
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
  onHandlerInput: () => {},
  editable: true,
  showUndo: false,
  onUndoRejection: () => {},
};

export default RejectionField;
