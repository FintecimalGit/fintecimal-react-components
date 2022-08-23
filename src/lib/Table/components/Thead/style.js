import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    backgroundColor: '#FBFBFB',
    paddingBottom: theme.spacing(2),
  },
  th: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    padding: theme.spacing(2, 1.5),
    textAlign: 'left',
  },
  tableValue: {
    fontSize: '0.875rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
  },
  noPadding: {
    padding: 4,
  },
  cleanTable: {
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': {
      fontSize: '1rem',
      color: theme.palette.primary.main,
    },
  },
}));
