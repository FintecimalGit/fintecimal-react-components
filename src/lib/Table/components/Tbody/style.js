import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles((theme) => ({
  tr: {
    borderBottom: 'solid 1px #f1f1f1',
    '&:hover': {
      boxShadow:
          '0 11px 15px 2px rgba(141, 140, 140, 0.16), 0 9px 46px 8px rgba(225, 225, 225, 0.07), 0 24px 38px 25px rgba(3, 3, 3, 0.05)',
      backgroundColor: 'inherit',
      cursor: 'pointer',
      '& > td': {
        color: theme.palette.primary.main,
      },
    },
  },
  td: {
    fontWeight: 'normal',
    padding: theme.spacing(2, 1.5),
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
