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
  iconButton: {
    '& > span > svg': {
      fontSize: '1.2rem',
    },
  },
  container: {
    padding: theme.spacing(2),
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default useStyles;
