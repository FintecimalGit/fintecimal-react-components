import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    backgroundColor: '#202124',
    scrollbarColor: '#A3B0C0 #DFE9F4', /* thumb and track color */
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar-track': {
      borderRadius: '100px',
      backgroundColor: '#DFE9F4',
    },
    '&::-webkit-scrollbar': {
      width: '12px',
      borderRadius: '100px',
      backgroundColor: '#DFE9F4',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '100px',
      backgroundColor: '#A3B0C0',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  page: {
    marginTop: theme.spacing(2),
  },
}));
