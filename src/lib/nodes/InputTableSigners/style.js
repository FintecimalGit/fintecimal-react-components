import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        width: '100%',
        margin: 0,
    },
    tableContent: {
        padding: theme.spacing(2,0),
        overflowX: 'auto',
    },
    csvActions: {
        position: 'relative',
        padding: theme.spacing(1),
    },
    input_loader: {
        positions: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        '& > div': {
            position: 'inherit',
            '& label': {
                backgroundColor: '#fff',
                color: theme.palette.primary.main,
                padding: theme.spacing(1),
                cursor: 'pointer',
                borderRadius: '5px',
                border: `1px solid ${theme.palette.primary.dark}`,
                '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                },
            },
            '& input': {
                display: 'none'
            },
        },
    },
    errorContainerOn: {
        opacity: '1',
    },
    errorContainerOff: {
        opacity: '0',
    },
    errorContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        buttom: 0,
        left: 0,
        margin: 'auto',
        width: '100%',
        transition: 'all 0.3s cubic-bezier(0.1, 0.3, 1.0, 0.1)',
        marginTop: theme.spacing(0.5),
        fontSize: '12px',
        textAlign: 'left',
        '& div': {
            borderRadius: '5px',
            border: '1px solid #ebccd1',
            padding: theme.spacing(2),
            maxWidth: '50%',
            backgroundColor: '#f2dede',
            '& span': {
                display: 'block',
                color: '#a94442'
            },
        },
    },
}));

export default useStyles;