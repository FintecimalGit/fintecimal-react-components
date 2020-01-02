import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    padding: theme.spacing(2),
  },
  video: {
    width: '100%',
    height: '367px',
    objectFit: 'contain',
  },
}));

export default useStyles;
