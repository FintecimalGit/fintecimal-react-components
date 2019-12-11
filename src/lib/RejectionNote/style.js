import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  'MuiCardHeader-avatar': {
    margin: 0,
  },
  card: {
    width: 326,
  },
  cardHeader: {
    paddingBottom: theme.spacing(1),
    '& > div:first-child': {
      marginRight: theme.spacing(1),
    },
  },
  avatar: {
    fontSize: '1em',
    width: '32px',
    height: '32px',
  },
  menuItem: {
    padding: 0,
    outline: 'none',
    overflow: 'initial',
  },
  iconButton: {
    padding: theme.spacing(1.5),
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  closeIcon: {
    fontSize: '1rem',
  },
  cardContent: {
    paddingTop: 0,
    '& > p:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
    '& > p': {
      letterSpacing: '0.2px',
      lineHeight: '19px',
    },
    '& > p > div:last-child': {
      opacity: 0.8,
    },
  },
}));
