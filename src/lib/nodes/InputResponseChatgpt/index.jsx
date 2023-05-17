import React, { useState, useEffect } from 'react';
import { Avatar, Paper, Typography } from '@material-ui/core';
import useStyles from './style';

const InputResponseChatgpt = ({
  value,
  handleChange,
  delay,
  avatarUrl,
  typeAnimationOnStart,
  defaultValue,
}) => {
  const [typing, setTyping] = useState(true);
  const [message, setMessage] = useState(value);

  const [displayMessage, setDisplayMessage] = useState('');
  const classes = useStyles();

  const handleOnChange = (event) => {
    setMessage(event);
    setDisplayMessage('');
    handleChange(event);
  };

  useEffect(() => {
    if (message !== value || typeAnimationOnStart) {
      const words = message.split(' ');
      let i = 0;
      const intervalId = setInterval(() => {
        if (i >= words.length) {
          setTyping(false);
          clearInterval(intervalId);
          return;
        }
        setDisplayMessage((prev) => prev + ' ' + words[i]);
        i++;
      }, delay);

      return () => clearInterval(intervalId);
    } else {
      setDisplayMessage(value);
    }
  }, [message]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTyping(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      <Paper className={classes.root} elevation={1}>
        <Avatar alt="Bot" src={avatarUrl} className={classes.avatar} />
        {value ? (
          <Typography className={classes.message} variant="body1">
            {displayMessage}
            {typing && <span className={classes.dot}>.</span>}
          </Typography>
        ) : (
          <Typography className={classes.message} variant="body1">
            {defaultValue}
            {typing && <span className={classes.dot}>.</span>}
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
  delay: 100,
  value: '',
  typeAnimationOnStart: false,
  defaultValue: 'Aún no se ha recibido una respuesta de chatgpt',
};

export default InputResponseChatgpt;
