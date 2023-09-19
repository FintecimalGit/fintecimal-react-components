import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  InputLabelPropsRoot: {
    fontSize: '16px',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    whiteSpace: 'break-spaces',
    width: '100%',
  },
  InputLabelPropsFocused: {
    color: '#7C839D !important',
  },
  textField: {
    paddingTop: theme.spacing(1),
  },
  // RedditTextField Reference
  InputPropsRoot: {
    border: '1px solid #FFFFFF',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },

  InputPropsFocused: {
    backgroundColor: '#fff !important',
    borderColor: theme.palette.primary.main,
  },

  InputPropsInput: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

  InputPropsInputTextArea: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },

  InputPropsDisabled: {
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
    '&:hover': {
      borderColor: '#e0e0e0',
    },
  },

  InputPropsError: {
    borderColor: theme.palette.error.main,
  },
  form: {
    width: '100%',
  },
}));
