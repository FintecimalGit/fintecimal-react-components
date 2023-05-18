import React, { useState, useEffect } from 'react';
import { Avatar, Paper, Typography } from '@material-ui/core';
import useStyles from './style';
import { TrainRounded } from '@material-ui/icons';

const InputResponseChatgpt = ({ value, handleChange, configChatgpt, avatarUrl, defaultValue }) => {
  const { delay = 100, typeAnimationOnStart = false } = configChatgpt;

  const [displayMessage, setDisplayMessage] = useState('');
  const classes = useStyles();

  const formattedValue = () => {
    return value.replace(/\\n\n/g, '\n\n').replace(/\\n/g, '\n');
  };

  useEffect(() => {
    if (value) {
      const newValue = formattedValue();
      setDisplayMessage(newValue);
    }
  }, [value]);

  return (
    <>
      <Paper className={classes.root} elevation={1}>
        <Avatar alt="Bot" src={avatarUrl} className={classes.avatar} />
        {value ? (
          <Typography className={classes.message} variant="body1">
            <pre className={classes.spanPre}>{displayMessage}</pre>
          </Typography>
        ) : (
          <Typography className={classes.message} variant="body1">
            {defaultValue}
          </Typography>
        )}
      </Paper>
    </>
  );
};

InputResponseChatgpt.defaultProps = {
  avatarUrl: 'https://fintecimal-test.s3.amazonaws.com/img_bot_gpt.png',
  className: '',
  required: false,
  disabled: false,
  handleChange: () => {},
  value: '',
  configChatgpt: {},
  defaultValue: 'Aún no se ha recibido una respuesta de chatgpt',
};

export default InputResponseChatgpt;
