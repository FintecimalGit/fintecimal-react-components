import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    backgroundColor: '#E5E7F4',
    width: '100%',
    borderRadius: '20px',
    padding: '6px 10px',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    overflowX: 'auto',
    [theme.breakpoints.up('sm')]: {
      padding: '10px 15px',
    },
  },
  signer: {
    flex: 1
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
