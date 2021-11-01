import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  dialogContainer: {
    zIndex: '9999 !important',
  },
  iconContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
  icon: {
    fontSize: '3rem',
    color: 'red',
  },
  allowedFormat: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '1rem',
  },
  dialogContentText: {
    marginBottom: '0 !important',
    textAlign: 'center',
  },
}));
