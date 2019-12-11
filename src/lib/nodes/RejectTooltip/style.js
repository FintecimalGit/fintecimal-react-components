import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  content: {
    height: '231px',
    width: '328px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 20px 0 rgba(0,0,0,0.2)',
    border: '0',
    borderRadius: '10px',
    zIndex: '1',
    position: 'absolute',
    bottom: '90%',
    right: '-28px',
    '&::before': {
      content: '""',
      position: 'absolute',
      right: '10%',
      top: '100%',
      width: '0',
      height: '0',
      borderLeft: '15px solid transparent',
      borderRight: '15px solid transparent',
      borderTop: '10px solid #FFFFFF'
    },
    transition: 'opacity 15s ease-in-out'
  },
  textAreaContent: {
    margin: '10px 25px 10px 20px',
    height: '68px'
  },
  textareaTitle: {
    width: '100%',
    color: theme.palette.text.primary,
    fontSize: '0.875rem',
    fontWeight: '500'
  },
  textarea: {
    width: '100%',
    height: '100%',
    outline: 'none',
    resize: 'none',
    border: '1px solid #D5DCE0',
    borderRadius: '2px',
    marginTop: '5px',
    fontWeight: 'bold',
    color: theme.palette.text.primary
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: '0',
    right: '0',
    borderTop: '1px solid #D5DCE0',
    display: 'inline-flex',
    textAlign: 'center',
    height: '46px'
  },
  cancelContent: {
    width: '50%',
    borderRight: '1px solid #D5DCE0'
  },
  rejectContent: {
    width: '50%'
  },
  button: {
    height: '100%',
    width: '100%'
  },
  select: {
    margin: '20px 20px 12px 20px'
  }
}));
