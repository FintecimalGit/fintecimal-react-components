import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    [theme.breakpoints.up('sm')]: {
      padding: '32px',
    },
  },
  title: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#000',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
  },
}));

export default useStyles;