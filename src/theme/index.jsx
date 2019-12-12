import React from 'react';
import PropTypes from 'prop-types';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#38e7c8',
      main: '#133d9b',
      dark: '#0f317b',
      contrastText: '#fbfbfb',
      disabled: '#aaaaaa'
    },
    secondary: {
      main: '#ff7807',
      contrastText: '#fff'
    },
    tertiary: {
      main: '#4c5c68'
    },
    background: {
      main: '#fbfbfb',
      secondary: '#f2f2f2'
    },
    text: {
      primary: '#4c5c68',
      secondary: '#979797',
      primaryDark: '#354551'
    },
    status: {
      success: {
        main: '#53D5C5',
        dark: '#49CCBC'
      },
      danger: {
        main: '#C42525',
        dark: '#9B1C1C'
      },
      warning: {
        main: '#ffc107',
        dark: '#CC9B06'
      }
    }
  },
  logo: 'url(https://fintecimal-test.s3.amazonaws.com/fintecimal-img/logo_web_mega.png)',
  border: '#F3F3F3'
});

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Theme.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Theme;
