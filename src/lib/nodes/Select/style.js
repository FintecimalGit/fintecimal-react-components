import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1),
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
    backgroundColor: '#fff'
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '1rem'
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
    border: '1px solid #E0E0E0',
    borderRadius: 4
  },
  focus: {
    marginTop: 3,
    borderColor: theme.palette.primary.main
  },
  error: {
    marginTop: 3,
    borderTop: '2px solid rgba(244,67,54,0.7)',
    borderLeft: '2px solid rgba(244,67,54,0.7)',
    borderRight: '2px solid rgba(244,67,54,0.7)',
    borderBottom: '2px solid rgba(244,67,54,0.7)'
  }
}));
