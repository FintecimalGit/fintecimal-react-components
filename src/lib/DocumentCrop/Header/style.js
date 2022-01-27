import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },

  onBackContainer: {
    paddingRight: theme.spacing(2),
  },

  iconButton: {
    padding: theme.spacing(1),
  },

  icon: {
    color: theme.palette.primary.main,
    fontSize: '1rem',
  },
}));
