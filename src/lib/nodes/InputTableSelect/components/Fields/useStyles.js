import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  fieldsContainer: {
    width: '90%',
    margin: '0 auto',

  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    fontSize: '1.25rem',
    textTransform: 'initial',
    padding: '0.75rem 2.5rem',
    background: '#FFFFFF',
    color: '#000F8f',
    borderColor: '#000F8f',
  },
  fieldClass: {
    width: '100%',
  },
}));
