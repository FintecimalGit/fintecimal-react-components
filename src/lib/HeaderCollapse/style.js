import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    borderRadius: '4px',
    backgroundColor: '#fbfbfb',
  },
  listItemText: {
    '& > span': {
      textTransform: 'capitalize',
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      fontSize: '1rem',
    },
  },
  iconButtonContainer: {
    margin: theme.spacing(0, 1),
    '& > span > svg': {
      color: theme.palette.primary.main,
      fontSize: '1rem',
    }
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '24px',
    height: '20px',
    borderRadius: '2px',
    border: 'solid 1px #f1f1f1',
    '& > svg': {
      color: theme.palette.primary.main,
      fontSize: '1rem',
    }
  },
}));

export default useStyles;
