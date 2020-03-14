import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        width: '100%',
        margin: 0,
    },
    tableContent: {
        padding: theme.spacing(2,0),
    },
}));

export default useStyles;