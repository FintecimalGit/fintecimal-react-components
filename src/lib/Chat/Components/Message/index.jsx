import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';
import { ApiMessage } from '../ApiMessage';
import { UserMessage } from '../UserMessage';
import { API_MESSAGE } from '../../constants/messages'; 

export const Message = ({ message, type }) => {
  const classes = useStyles();
  return (
    <>
      {
        type === API_MESSAGE ? (
          <ApiMessage message={message} />
        ) : (
          <UserMessage message={message} />
        )
      }
    </>
  )
};

Message.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

Message.defaultProps = {
  message: '',
  type: 'API_MESSAGE',
};
