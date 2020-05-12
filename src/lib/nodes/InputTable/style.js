import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        width: '100%',
        margin: 0,
    },
    tableContent: {
        padding: theme.spacing(2,0),
    },
    input_loader: {
        margin: theme.spacing(1),
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
}));

export default useStyles;