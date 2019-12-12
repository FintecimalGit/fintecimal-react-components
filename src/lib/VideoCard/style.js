import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    display: 'inline-block',
    '&:hover $rejectContainer': {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    }
  },
  rejectContainer: {
    position: 'absolute',
    padding: theme.spacing(8),
    top: '0px',
    right: theme.spacing(-13),
    height: '100%',
    display: 'none',
    '&:hover': {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
  },
  video: {
    width: '648px',
    height: '367px',
    objectFit: 'contain',
  },
}));

export default useStyles;
