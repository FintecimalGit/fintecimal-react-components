import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '48px'
  },
  form: {
    alignSelf: 'stretch'
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    opacity: 1
  },
  inputContainer: {
    flex: '1px',
    backgroundColor: '#fff',
    fontSize: 14
  },
  input: {
    width: '100%',
    boxSizing: 'border-box'
  },
  notchedOutline: {
    borderWidth: 1,
    opacity: 0.7
  },
  focusNotchedOutline: {
    borderWidth: 2,
    opacity: 1
  },
  asterisk: {
    color: theme.palette.error.main,
    fontSize: 13,
    verticalAlign: 'super'
  },
  icon: {
    marginRight: 10
  },
  item: {
    paddingLeft: theme.spacing(3)
  },
  category: {
    fontWeight: theme.typography.fontWeightBold,
    opacity: 1
  },
  selectMenu: {
    border: '2px solid red'
  },
  normal: {
    marginTop: 3,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D5DCE0',
    borderRadius: 4
  },
  focus: {
    marginTop: 3,
    borderColor: theme.palette.primary.main
  },
  error: {
    marginTop: 3,
    borderColor: theme.palette.status.danger.main
  }
}));
