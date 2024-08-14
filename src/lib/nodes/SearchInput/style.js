import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    position: 'relative', // Necesario para posicionar la lista de resultados
  },
  form: {
    alignSelf: 'stretch',
    '& .MuiOutlinedInput-root.Mui-disabled.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.palette.error.main} !important`,
      }
    }
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    opacity: 1
  },
  input: {
    flex: 1,
    fontSize: 14
  },
  notchedOutline: {
    borderWidth: 1,
    opacity: 0.7
  },
  status: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    lineHeight: '1.25rem',
    fontWeight: '700',
  },
  focusNotchedOutline: {
    borderWidth: 2,
    opacity: 1
  },
  asterisk: {
    color: theme.palette.error.main,
    fontSize: 14.2,
    verticalAlign: 'super'
  },
  icon: {
    fontSize: 16
  },
  resultsList: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.main,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    borderRadius: '0 0 4px 4px',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  },
  listItem: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.main,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));
