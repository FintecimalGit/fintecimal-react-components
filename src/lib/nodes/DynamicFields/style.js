import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    width: '100%',
    margin: 0,
  },
  root:{
    margin: theme.spacing(2),
  },
}));

export default useStyles;