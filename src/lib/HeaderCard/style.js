import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    display: 'inline-block',
    boxShadow: '0 11px 15px 2px rgba(141, 140, 140, 0.16), 0 9px 46px 8px rgba(225, 225, 225, 0.07), 0 24px 38px 25px rgba(3, 3, 3, 0.05)', // estandar
    position: 'relative',
  },
  cardHeader: {
    padding: 0,
    paddingBottom: theme.spacing(3),
    '& > div > span:first-child': {
      fontSize: '1rem',
      letterSpacing: '0.2px',
      fontWeight: 'bold',
    },
  },
}));

export default useStyles;
