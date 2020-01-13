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
  selected: {
    backgroundColor: theme.palette.secondary.main,
    width: '4px',
    height: '30px',
    position: 'absolute',
    // top: 0,
    left: 0,
  },
  label: {
    flex: '1 1 auto',
    margin: 0,
    fontSize: 18,
    paddingLeft: theme.spacing(3),
    textTransform: 'lowercase',
    '&::first-letter': {
      textTransform: 'capitalize',
    },
    fontWeight: 'normal',
    color: theme.palette.tertiary.main,
  },
  labelSelected: {
    flex: '1 1 auto',
    margin: 0,
    fontSize: 18,
    paddingLeft: theme.spacing(3),
    textTransform: 'lowercase',
    '&::first-letter': {
      textTransform: 'capitalize',
    },
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  labelComplete: {
    flex: '1 1 auto',
    margin: 0,
    fontSize: 18,
    paddingLeft: theme.spacing(3),
    textTransform: 'lowercase',
    '&::first-letter': {
      textTransform: 'capitalize',
    },
    color: theme.palette.primary.main,
  },
  icon: {
    flex: '0 0 auto',
    paddingRight: 20,
    fontSize: '1.5rem',
  }
}));

export default useStyles;
