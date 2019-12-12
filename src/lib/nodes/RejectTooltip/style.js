import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: 244,
    width: 326,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 -2px 20px 0 rgba(0, 0, 0, 0.2)',
    border: '0',
    borderRadius: 4,
    zIndex: '1',
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
  select: {
    margin: theme.spacing(2)
  },
  textAreaContent: {
    margin: theme.spacing(0, 4, 2, 2),
    flex: 1
  },
  textarea: {
    width: '100%',
    height: '100%',
    outline: 'none',
    resize: 'none',
    padding: theme.spacing(1),
    border: '1px solid #ebebeb',
    borderRadius: '4px',
    fontSize: 14.2,
    letterSpacing: 0.25,
    lineHeight: 1.41,
    fontWeight: 'normal',
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: theme.palette.text.secondary
    }
  },
  footer: {
    display: 'flex',
    height: 49,
    marginTop: theme.spacing(2),
    borderTop: '1px solid #f2f2f2',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  cancelContent: {
    flex: 1,
    borderRight: '1px solid #D5DCE0'
  },
  rejectContent: {
    flex: 1
  },
  button: {
    height: '100%',
    width: '100%'
  }
}));
