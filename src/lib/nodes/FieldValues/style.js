import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  titleContainer: {
    padding: theme.spacing(1.5, 0),
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
