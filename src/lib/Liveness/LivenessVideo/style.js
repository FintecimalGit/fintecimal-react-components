import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    height: '100%',
    padding: theme.spacing(2),
  },
  video: {
    backgroundColor: '#F8F8F8',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    border: '1px solid black',
  },
}));

export default useStyles;
