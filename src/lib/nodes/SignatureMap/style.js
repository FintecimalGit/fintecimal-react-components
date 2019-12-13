import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
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
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.text.primary
  },
  location: {
    flex: 1,
    margin: theme.spacing(2)
  },
  date: {
    flex: 1,
    margin: theme.spacing(2)
  },
  info: {
    marginLeft: theme.spacing(2)
  }
}));
