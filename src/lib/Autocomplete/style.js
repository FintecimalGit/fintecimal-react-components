import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    height: 250,
    flexGrow: 1,
  },

  container: {
    position: 'relative',
  },

  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },

  sectionTitle: {
    display: 'block',
    fontWeight: 'bold',
    color: 'rgba(76, 92, 104, 0.5)',
    padding: theme.spacing(1, 3),
  },

  suggestion: {
    display: 'block',
    cursor: 'pointer',
    padding: theme.spacing(1, 3),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },

  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  divider: {
    height: theme.spacing(2),
  },
}));
