import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  button: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      color: theme.palette.background.main,
    },
    '&:active': {
      backgroundColor: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
      color: theme.palette.background.main,
    },
  },
}));
