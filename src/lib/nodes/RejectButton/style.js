import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  icon: {
    transform: 'scale(-1, 1)'
  },
  button: {
    height: 48,
    width: 48,
    backgroundColor: '#979797',
    '&:hover': {
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#8A2B2B',
      color: '#8A2B2B',
      boxShadow: '0 24px 38px 3px rgba(0,0,0,0.14)'
    }
  }
}));
