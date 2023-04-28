import React, { useState, useMemo } from 'react';
import { Button, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import useStyles from './style';
import useLoading from './hooks/useLoading';
import { API_MESSAGE, USER_MESSAGE } from './constants/messages';
import { Message } from './Components/Message';

const INITIAL_VALUES = [
  { message: '¿Me puedes decir si la fecha de emisión de la constacia ya tiene mas de un mes?', type: API_MESSAGE },
  { message: 'Sí, la fecha de emisión de la constancia de situación fiscal es el 25 de agosto de 2021. Al día de hoy, 17 de abril de 2023, han pasado aproximadamente 1 año y 7 meses desde la fecha de emisión, lo que es considerablemente más de un mes.', type: USER_MESSAGE },
  { message: '¿Me puedes decir si la fecha de emisión de la constacia ya tiene mas de un mes?', type: API_MESSAGE },
  { message: 'Sí, la fecha de emisión de la constancia de situación fiscal es el 25 de agosto de 2021. Al día de hoy, 17 de abril de 2023, han pasado aproximadamente 1 año y 7 meses desde la fecha de emisión, lo que es considerablemente más de un mes.', type: USER_MESSAGE }
  ,{ message: '¿Me puedes decir si la fecha de emisión de la constacia ya tiene mas de un mes?', type: API_MESSAGE },
  { message: 'Sí, la fecha de emisión de la constancia de situación fiscal es el 25 de agosto de 2021. Al día de hoy, 17 de abril de 2023, han pasado aproximadamente 1 año y 7 meses desde la fecha de emisión, lo que es considerablemente más de un mes.', type: USER_MESSAGE },
  { message: '¿Me puedes decir si la fecha de emisión de la constacia ya tiene mas de un mes?', type: API_MESSAGE },
  { message: 'Sí, la fecha de emisión de la constancia de situación fiscal es el 25 de agosto de 2021. Al día de hoy, 17 de abril de 2023, han pasado aproximadamente 1 año y 7 meses desde la fecha de emisión, lo que es considerablemente más de un mes.', type: USER_MESSAGE }

];

const Chat = ({
  textLimit,
  placeHolder,
  buttonText,
}) => {
  const [messages, setMessages] = useState(INITIAL_VALUES);
  const [query, setQuery] = useState('');
  const classes = useStyles();
  const {
    startLoading,
    endLoading,
    isLoading,
  } = useLoading();

  const wordsCount = useMemo(() => {
    const cleanText = query.trim();
    if (cleanText === '') return 0;
    const words = cleanText.split(" ");
    return words.length;
  }, [query]);

  const formattedTextLimit = useMemo(() => {
    const textLimitStr = textLimit.toString().split("").reverse().join("");
    const groups = textLimitStr.match(/.{1,3}/g);
    const result = groups.join(",").split("").reverse().join("");
    return result;
  }, [textLimit]);

  const textWordCount = useMemo(() => `${wordsCount}/${formattedTextLimit}`, [formattedTextLimit, wordsCount]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      startLoading();

      endLoading();
    } catch(e) {
      endLoading();
    }
  };
  return (
    <div className={classes.messagesContainer}>
      <div className={classes.innerMessageContainer}>
        <div className={classes.chatMessages}>
          {
            messages.map(({ message, type }) => (
              <Message message={message} type={type} />
            ))
          }
        </div>
      </div>
      <div className={classes.formContainer}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.textContainer}>
              <TextField
                id="outlined-multiline-static"
                label={placeHolder}
                multiline
                rows={2}
                variant="outlined"
                value={query}
                onChange={handleChange}
                className={classes.textField}
                classes={
                  {root: classes.textFieldRoot,}
                }
              />
            </div>
            <div className={classes.buttonContainer}>
              <span className={classes.wordsCount}>{textWordCount}</span>
              <Button variant="contained" className={classes.button} endIcon={<SendIcon />}>{buttonText}</Button>
            </div>
          </form>
      </div>
    </div>
  )
}

Chat.propTypes = {
  textLimit: PropTypes.number,
  placeHolder: PropTypes.string,
  buttonText: PropTypes.string,
};

Chat.defaultProps = {
  textLimit: 10,
  placeHolder: 'Ask ChatGPT...',
  buttonText: 'Generar',
};

export default Chat;
