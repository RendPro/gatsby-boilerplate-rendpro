import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import GlobalStyles from '@theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@theme/theme';

const BasicTemplate = ({ children }) => (
  <>
    <Helmet>
      <title>RendPro BoilerPlate</title>
    </Helmet>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </>
);

BasicTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicTemplate;
