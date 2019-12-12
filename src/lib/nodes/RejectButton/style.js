import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    paddingTop: 10
  },
  icon: {
    transform: 'scale(-1, 1)'
  },
  badge: {
    color: theme.palette.status.success.main,
    marginBottom: 20,
    cursor: 'pointer'
  },
  button: {
    height: 48,
    width: 48,
    marginTop: 10,
    backgroundColor: '#979797'
  },
  disabled: {
    '&:hover': {
      backgroundColor: '#676767'
    },
    backgroundColor: '#676767',
    cursor: 'auto'
  },
  hover: {
    '&:hover': {
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.status.danger.main,
      color: theme.palette.status.danger.main,
      boxShadow: '0 24px 38px 3px rgba(0,0,0,0.14)'
    }
  }
}));
