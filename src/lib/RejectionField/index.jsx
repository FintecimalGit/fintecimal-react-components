import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
  rejectionShowed,
  editable,
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
    <List className={classnames(
      classes.list,
      { [classes.listBorder]: rejected && forceDisplay === 'inline-block' },
    )}>
      <ListItem className={classes.listItem}>
        <ListItemText primary={field.key} secondary={ field.value }/>
        <ListItemSecondaryAction>
          <div className={classes.listItemSecondaryContainer}>
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
                rejectionShowed={rejectionShowed}
                editable={editable}
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