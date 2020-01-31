import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3, 5),
    },
    tableContent: {
        padding: theme.spacing(3,5),
        width: '80%',
    },
}));

export default useStyles;