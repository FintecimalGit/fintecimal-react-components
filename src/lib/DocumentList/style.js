import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dot: {
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    display: 'inline-block',
    border: 'solid 2px',
    marginRight: theme.spacing(2),
    verticalAlign: 'middle'
  },
  dotPending: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  dotPending: {
    backgroundColor: '#000',
    borderColor: '#000'
  },
  dotSuccess: {
    backgroundColor: '#53d5c5',
    borderColor: '#53d5c5'
  },
  dotDanger: {
    backgroundColor: 'red',
    borderColor: 'red'
  },
  name: {
    color: theme.palette.text.primary
  },
  nameOnHole: {
    opacity: '0.5'
  },
  successIcon: {
    color: '#53d5c5'
  },
  dangerIcon: {
    color: 'red'
  },
  listItem: {
    borderBottom: 'solid 1px #f1f1f1',
    '&:hover': {
      boxShadow:
        '0 11px 15px 2px rgba(141, 140, 140, 0.16), 0 9px 46px 8px rgba(225, 225, 225, 0.07), 0 24px 38px 25px rgba(3, 3, 3, 0.05)', // estandar
      backgroundColor: 'inherit'
    }
  },
  noPadding: {
    padding: 0
  },
  statusName: {
    fontSize: '14px',
    letterSpacing: '0.29px',
    fontWeight: '600',
    paddingRight: theme.spacing(6.5)
  }
}));

export default useStyles;
