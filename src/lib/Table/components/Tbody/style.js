import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles((theme) => ({
  tr: {
    borderBottom: 'solid 1px',
    borderBottomColor: fade('#F1F1F1', 0.5),
    '&:hover': {
      boxShadow: '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)',
      cursor: 'pointer',
      '& > td': {
        color: theme.palette.primary.main,
      }
    },
  },
  td: {
    fontWeight: 'normal',
    padding: theme.spacing(2, 1.5),
    textTransform: 'lowercase',
    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
  noPadding: {
    padding: 4,
  },
  editButton: {
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': {
      fontSize: '1rem',
    },
  },
}));
