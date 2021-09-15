import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(2.5),
    borderBottom: '1px solid #DCDCDC',
    margin: 0,
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  label: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    lineHeight: '1.25rem',
    fontWeight: '700',
    color: '#000',
    margin: 0,
  },
  status: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    lineHeight: '1.25rem',
    fontWeight: '700',
    margin: 0,
  },
}));
