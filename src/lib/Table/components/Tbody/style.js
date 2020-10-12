import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles(theme => ({
  tr: {
    borderBottom: 'solid 1px',
    borderBottomColor: fade('#F1F1F1', 0.5),
    '&:hover': {
      boxShadow:
        '0 24px 38px 20px rgba(0,0,0,0.07), 0 23px 46px 20px rgba(0,0,0,0.01), 0 11px 46px 20px rgba(0,0,0,0.07)',
      cursor: 'pointer',
      '& > td': {
        color: theme.palette.primary.main
      }
    }
  },
  td: {
    fontWeight: 'normal',
    padding: theme.spacing(2, 1.5)
  },
  noPadding: {
    padding: 4
  },
  editButton: {
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': {
      fontSize: '1rem'
    }
  }
}));
