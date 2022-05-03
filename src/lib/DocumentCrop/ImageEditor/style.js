import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {

  },
  cancel: {
    top: 2,
    left: 2,
    position: 'absolute',
    width: '70px',
    backgroundColor: 'transparent'
  },
  img: {
    maxWidth: '100%',
    height: '25vh', // FIX BIG IMAGE
    display: 'block',
  },

  actionContainer: {
    padding: theme.spacing(1),
    backgroundColor: 'transparent',
    maxHeight: '58vh',
    overflowY: 'auto',
  },

  actions: {
    top: 0,
    right: 10,
    position: 'absolute',
    width: '70px',
    backgroundColor: 'transparent'
  },

  button: {
    fontSize: '12px',
    textTransform: 'initial',
    color: '#FFF',
    borderRadius: '3px',

    '& > span > svg': {
      color: theme.palette.primary.main,
    }
  },
}));
