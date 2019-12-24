import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    border: `solid 1px ${theme.border}`,
    borderRadius: '4px',
    height: 321,
    boxSizing: 'border-box',
    letterSpacing: 0.2
  },
  header: {
    height: 51,
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    padding: theme.spacing(2),
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.palette.text.primary
  },
  map: {
    flex: 1,
    padding: theme.spacing(2)
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1rem',
    fontWeight: 500,
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2),
    '& > div': {
      flex: '50%',
      display: 'inline-flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      '& > span': {
        display: 'inline-block',
        padding: theme.spacing(2),
        '&:first-child': {
          backgroundColor: '#fdfdfd',
        }
      }
    }
  },
}));
