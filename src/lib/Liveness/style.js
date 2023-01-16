import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    boxShadow: 'none',
    position: 'relative',
    border: 'solid 1px #fbfbfb',
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    '& > div:first-child > span:first-child': {
      fontSize: '1rem',
      letterSpacing: '0.2px',
      fontWeight: 'bold'
    },
    '& > div:last-child': {
      alignSelf: 'end',
      '& > button:first-child': {
        padding: '4px',
      }
    },
  },
  containerCarousel: {
    padding: theme.spacing(2, 2, 0, 2),
  },
  ines:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipValidation: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '1rem',
    height: '30px',
  },
  img: {
    height: '100%',
    width: 'auto',
  },
  containerInes: {
    padding: theme.spacing(2),
    '& > *:not(img)': {
      width: '100%',
    },

    '& > img': {
      display: 'inline-block',
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'fill',
    }
  },
  grid: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '1fr',
  },
  containerNothing: {
    width: '100%',
    height: '100%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerNothingTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 700,
  },
  containerIneImg: {
    width: '100%',
  },
  containerCarousel: {
    padding: theme.spacing(2, 2, 0, 2),
  },
  ineImg: {
    width: '100%',
    objectFit: 'contain',
    maxHeight: '229px',
  },
}));

export default useStyles;
