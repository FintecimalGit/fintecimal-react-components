import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  messagesContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F1FF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  innerMessageContainer: {
    width: '100%',
    flex: 1,
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
  chatMessages: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '2px 4px 2px 4px',
  },
  form: {
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '10px',
    border: '1px solid gray',
  },
  textContainer: {
    width: '100%',
  },
  textField: {
    width: '100%',
    borderColor: 'white',
  },
  textFieldRoot: {
    '& label.Mui-focused': {
      color: 'transparent',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
      },
    },
  },
  buttonContainer: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(1.5),
    paddingBottom: theme.spacing(1),
  },
  wordsCount: {
    color: '#7D7D7D',
  },
  button: {
    backgroundColor: '#4F41F2',
    borderRadius: '10px',
    color: 'white',
    fontWeight: 700,
    lineHeight: '20px',
    fontFamily: 'Open Sans',
    fontSize: '1rem',
  },
}));
