import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    overflowX: 'auto',
  },
  flexText: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  signer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: '6px 10px',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      padding: '10px 15px',
    },
  },
  current: {
    backgroundColor: '#E5E7F4',
  },
  label: {
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: '1rem',
    color:  '#000F8F',
    display: 'block',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
  },
  status: {
    fontWeight: 700,
    fontSize: '0.625rem',
    lineHeight: '1rem',
    color: '#FF5F00',
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
  },
  score: {
    fontWeight: 700,
    display: 'inline-block',
    marginLeft: '1rem',
    fontSize: '0.625rem',
    lineHeight: '2rem',
    color: '#FF5F00',
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
  },
  completed: {
    color: '#1A9A9A',
  },
  divider: {
    margin: '0 40px',
    [theme.breakpoints.up('sm')]: {
      margin: '0 20px',
    },
  },
}));
