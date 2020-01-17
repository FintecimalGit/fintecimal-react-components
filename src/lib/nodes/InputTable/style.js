import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        position: 'absolute',
        width: '401px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ffffff',
        '&:focus': {
            outline: 'unset',
        },
        borderRadius: '4px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: theme.spacing(3, 5),
    }
}));

export default useStyles;