import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    backgroundColor: '#FBFBFB',
    paddingBottom: theme.spacing(2),
  },
  th: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    padding: theme.spacing(2, 1.5),
    textAlign: 'left',
  },
}));
