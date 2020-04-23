import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  form: {
    alignSelf: 'stretch',
    '& .MuiOutlinedInput-root.Mui-disabled.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#f44336 !important',
      }
    }
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    opacity: 1
  },
  input: {
    flex: '1px',
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
  asterisk: {
    color: theme.palette.error.main,
    fontSize: 14.2,
    verticalAlign: 'super'
  },
  icon: {
    fontSize: 16
  }
}));
