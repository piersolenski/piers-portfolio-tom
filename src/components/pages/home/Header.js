import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Grid from '../../common/Grid';

const ROUTES = [
  { name: 'Work', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/about' },
];

const Wrapper = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0%;
  width: 100%;
`;

const Inner = styled.div`
  height: 96px;
  grid-column: span 12;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 499px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  font-size: 21px;
  font-size: 16px;
`;

const Nav = styled.nav`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 4vw;
  font-size: 16px;
  a {
    &:before {
      content: '/ ';
      color: rgba(255, 255, 255, 0.25);
    }
  }
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Grid>
      <Inner>
        <Logo to="/">v2</Logo>
        <Nav>
          {ROUTES.map(route => (
            <Link key={route.path} to={route.path}>
              {route.name}
            </Link>
          ))}
        </Nav>
      </Inner>
    </Grid>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
