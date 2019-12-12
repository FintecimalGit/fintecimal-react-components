import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  button: {
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
    },
    '&:active': {
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
    },
  },
}));
