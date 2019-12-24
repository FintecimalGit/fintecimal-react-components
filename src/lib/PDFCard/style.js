import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pdfContainer: {
    padding: theme.spacing(2),
  },
  pdf: {
    width: '100%',
    height: '419px',
    objectFit: 'fill',
  },
}));

export default useStyles;
