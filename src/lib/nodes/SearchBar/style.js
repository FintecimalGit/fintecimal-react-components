import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: '48px'
  },
  border: {
    border: 'solid 1px',
    borderColor: 'rgba(0,0,0,0.12)',
    borderRadius: '4px'
  },
  inputContainer: {
    flex: '1px',
    backgroundColor: '#fff'
  },
  input: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    fontSize: '1rem',
    padding: theme.spacing(0, 2),
    '&:active, &:focus': {
      borderColor: theme.palette.primary.main
    },
    fontSize: 14.2,
    letterSpacing: 0.25,
    lineHeight: 20
  },
  icon: {
    padding: 16,
    color: 'rgba(44,62,80,0.54)'
  }
}));
