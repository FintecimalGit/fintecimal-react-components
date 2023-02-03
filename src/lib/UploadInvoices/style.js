import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  titleContainer: {
    padding: theme.spacing(1.5, 0),
    display: 'flex',
  },
  title: {
    color: theme.palette.primary.main,
  },
  asterisk: {
    color: theme.palette.error.main,
    marginLeft: '0.3rem',
  }
}));
