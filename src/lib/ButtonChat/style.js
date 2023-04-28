import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  test: {
    marginTop: '2rem',
    width: '100%',
    height: '80vh',
    position: 'relative',
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  iconButton: {
    position: 'absolute',
    right: '-0.75rem',
    top: '-0.75rem',
    backgroundColor: '#4F41F2',
    color: 'white',
    '&:hover': {
      opacity: '0.8',
    },
  },
}));
