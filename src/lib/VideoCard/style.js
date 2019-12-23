import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    display: 'inline-block',
    '&:hover $rejectContainer': {
      display: 'flex !important',
    }
  },
  rejectContainer: {
    position: 'absolute',
    padding: theme.spacing(0, 4),
    top: '0px',
    right: theme.spacing(-12),
    height: '100%',
    display: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    '&:hover': {
      display: 'flex !important',
    },
  },
  video: {
    width: '100%',
    maxWidth: '648px',
    maxHeight: '367px',
    objectFit: 'fill',
  },
  videoContainer: {
    padding: theme.spacing(2),
  }
}));

export default useStyles;
