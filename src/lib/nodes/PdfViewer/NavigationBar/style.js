import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    height: '72px !important'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  pageIndicator: {
    flexGrow: 1,
  },
  inputPage: {
    width: '28px',
    border: 'none',
    borderBottom: '1px solid white',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: '1rem',
    outline: 'none',
  },
  title: {
    flexGrow: 1,
  },
}));
