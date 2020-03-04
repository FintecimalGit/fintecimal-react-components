import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: theme.spacing(1.5),
        width: '100%',
    },
    title: {
        color: theme.palette.primary.main,
    },
    titleLine: {
        width: '40%',
        display: 'inline-block !important',
    },
    rejectAction: {
        width: '60%',
        display: 'inline-flex',
        justifyContent: 'flex-center',
        '& > div': {
            padding: 0,
            '& > span': {
                margin: 0,
            }
        }
    },
}));

export default useStyles;
