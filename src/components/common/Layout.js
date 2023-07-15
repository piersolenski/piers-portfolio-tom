import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../utils/globalStyles';
import theme from '../../utils/theme';
// import Header from './Header';
// import Footer from './Footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    // render={data => (
    render={() => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          {children}
          {/* <Footer siteTitle={data.site.siteMetadata.title} /> */}
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
