import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  datePicker: {
    width: '100%',
    '& > label': {
      fontSize: 14,
      fontWeight: 500,
      opacity: 1
    },
    '& > div > input': {
      fontSize: 14,
      flex: '1px',
    }
  },
  error: {
    '& > label': {
      color: `${theme.palette.error.main} !important`,
    },
    '& .MuiOutlinedInput-root': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.palette.error.main} !important`,
      }
    }
  },
  asterisk: {
    color: theme.palette.error.main,
    fontSize: 14.2,
    verticalAlign: 'super'
  },
}));
