import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  form: {
    flex: 20,
    alignSelf: 'stretch'
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    opacity: 1
  },
  input: {
    fontSize: 14
  },
  notchedOutline: {
    borderWidth: 1,
    opacity: 0.7
  },
  focusNotchedOutline: {
    borderWidth: 2,
    opacity: 1
  },
  inputBox: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'stretch',
    alignItems: 'center',
    margin: 0
  },
  icon: {
    flex: 1
  },
  asterisk: {
    color: theme.palette.error.main,
    fontSize: 14.2,
    verticalAlign: 'super'
  },
  close: {
    fontSize: theme.spacing(2),
    fontSize: 16
  },
  adornment: {
    fontSize: 14
  }
}));
