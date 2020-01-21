import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content_inputs: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(3),
    },
    content:{
        width: '40%',
    },
}));

export default useStyles;