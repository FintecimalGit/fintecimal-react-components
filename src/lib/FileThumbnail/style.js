import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    width: 'max-content',
    '&:hover $selector': {
      display: 'flex',
    }
  },
  imageContainer: {
    position: 'relative',
    width: '125px',
    height: '66px',
    border: 'solid 1px #E0E0E0',
    borderRadius: '4px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },
  selector: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    '& > svg': {
      fontSize: '1rem',
    }
  },
  typography: {
    paddingTop: theme.spacing(1),
    opacity: 0.5,
  },
  typographySelected: {
    opacity: 1,
  },
}));

export default useStyles;
