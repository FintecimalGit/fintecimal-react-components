import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Chat from '../Chat';
import useStyles from './style';

const ButtonChat = ({ textLimit }) => {
  const [showChat, setShowChat] = useState(false);
  const classes = useStyles();
  const closeChat = () => {
    setShowChat(false);
  };
  const openChat = () => {
    setShowChat(true);
  };
  return (
    <div className={classes.test}>
      <div className={classes.container}>
        {
          showChat ? (
            <IconButton
                className={classes.iconButton}
                onClick={closeChat}
            >
              <DeleteIcon />
            </IconButton>
          ) : (
            <IconButton className={classes.iconButton}
                onClick={openChat}
            >
              <EditIcon />
            </IconButton>
          )
        }
        <Chat textLimit={textLimit} />
      </div>
    </div>
  )
};

ButtonChat.propTypes = {
  textLimit: PropTypes.number,
};

ButtonChat.defaultProps = {
  textLimit: 10,
};

export default ButtonChat;
