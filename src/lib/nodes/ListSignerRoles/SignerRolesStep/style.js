import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    paddingBottom: theme.spacing(2),
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  label: {
    flex: '1 1 auto',
    margin: 0,
    fontSize: 16,
    paddingLeft: theme.spacing(5),
    textTransform: 'lowercase',
    '&::first-letter': {
      textTransform: 'capitalize',
    },
    fontWeight: 'normal',
    color: theme.palette.tertiary.main,
  },
  labelComplete: {
    flex: '1 1 auto',
    margin: 0,
    fontSize: 15  ,
    paddingLeft: theme.spacing(5),
    textTransform: 'lowercase',
    '&::first-letter': {
      textTransform: 'capitalize',
    },
    color: theme.palette.tertiary.main,
  },
  icon: {
    flex: '0 0 auto',
    color: theme.palette.secondary.main,
    paddingRight: 20,
    fontSize: '1.3rem',
  },
}));

export default useStyles;
