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
        positions: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        '& > div': {
            position: 'relative',
            width: 'auto',
            padding: theme.spacing(1),
            border: `1px solid ${theme.palette.primary.dark}`,
            maxWidth: 100,
            overflow: 'hidden',
            borderRadius: '5px',
            '& input': {
                '&::after': {
                    content: '"Subir CSV"',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    fontSize: '16px',
                    backgroundColor: '#fff',
                    color: theme.palette.primary.main,
                    // border: `1px solid ${theme.palette.primary.dark}`,
                    textTransform: 'capitalize',
                    cursor: 'pointer',
                    textAlign: 'center',
                    lineHeight: '35px',
                },
                '&:hover': {
                    '&::after': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                    },
                },
            },
        },
    },
}));

export default useStyles;