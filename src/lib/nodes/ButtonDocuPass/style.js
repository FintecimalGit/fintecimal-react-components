import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    border: '1px solid #dfdfdf;',
    borderRadius: '5px',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '20%',
    paddingRight: '20%',
  },
  button: {
    width: '100%',
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
