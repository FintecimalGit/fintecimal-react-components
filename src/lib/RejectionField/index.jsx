import React, { useState } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import RejectActions from '../nodes/RejectActions';

import useStyles from './style';

const RejectionField = ({
  field,
  onReject,
  rejectionOptions,
  rejectionData,
  rejected,
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

  return (
    <List className={classes.list}>
      <ListItem>
        <ListItemText primary={field.key} />
        <ListItemSecondaryAction>
          <div className={classes.listItemSecondaryContainer}>
            <div className={classes.listItemSecondaryText}>
              { field.value }
            </div>
            <div
              className={classes.rejectionActions}
              style={{ display: getRejectionActionsDisplay() }}
            >
              <RejectActions
                rejectionOptions={rejectionOptions}
                rejected={rejected}
                handlerReject={onReject}
                rejectionData={rejectionData}
                onOpen={keep}
                onClose={leave}
                size="small"
              />
            </div>
          </div>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
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
};

export default RejectionField;