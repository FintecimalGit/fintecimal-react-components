import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        margin: theme.spacing(2),
    },
    button:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    }
}));

export default useStyles;