import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#510ed0',
    color: '#ffffff',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#873eff',
      borderColor: '#873eff',
      boxShadow: 'none',
    }
  },
}));
