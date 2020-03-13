import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  form: {
    alignSelf: 'stretch'
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    opacity: 1
  },
  input: {
    paddingBottom: 3,
    paddingRight: 2
  },
  notchedOutline: {
    borderWidth: 2,
    opacity: 0.7
  },
  focusNotchedOutline: {
    borderWidth: 3,
    opacity: 1
  },
  asterisk: {
    color: theme.palette.error.main,
    fontSize: 14.2,
    verticalAlign: 'super'
  },
  icon: {
    fontSize: 16
  }
}));
