import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    height: '100%',
    padding: theme.spacing(2),
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

export default useStyles;
