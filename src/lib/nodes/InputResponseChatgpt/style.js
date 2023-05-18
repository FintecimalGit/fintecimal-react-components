import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(2),
    position: 'relative',
    backgroundColor: '#F7F7F7',
  },
  bubble: {
    backgroundColor: '#E8F0FE',
    borderRadius: '20px',
    padding: theme.spacing(1),
    maxWidth: '70%',
  },
  dot: {
    display: 'inline-block',
    animation: '$typing 1s infinite',
    marginLeft: '4px',
  },
  '@keyframes typing': {
    '0%': {
      opacity: 0,
      transform: 'scale(0.5)',
    },
    '50%': {
      opacity: 1,
      transform: 'scale(1)',
    },
    '100%': {
      opacity: 0,
      transform: 'scale(0.5)',
    },
  },
  image: {
    maxWidth: '100%',
    maxHeight: '200px',
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  message: {
    color: '#333333',
    fontFamily: 'Roboto, Helvetica, Arial, sams-serif'
  },
  spanPre: {
    whiteSpace: 'pre-line',
    color: '#333333',
    fontFamily: 'Roboto, Helvetica, Arial, sams-serif'
  }
}));

export default useStyles;