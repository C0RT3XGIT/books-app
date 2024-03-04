import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { NAV_ITEMS } from './config';
import { APP_PATHS } from '../../constants/appPaths';

const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 20px;
  background-color: #282c34;
`;

const CapitalizedHeader = styled.h1`
  text-transform: capitalize;
  text-wrap: nowrap;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #61dafb;
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  const getPageName = (path: string) => {
    const segments = path.split('/');
    const bookDetailedPage = pathname === `${APP_PATHS.BOOKS}/${id}`;
    return bookDetailedPage ? 'Book details' : segments[segments.length - 1];
  };
  return (
    <AppHeader>
      <CapitalizedHeader>{getPageName(pathname)}</CapitalizedHeader>
      <Nav>
        {NAV_ITEMS.map((item) => (
          <StyledNavLink key={item.path} to={item.path}>
            {item.label}
          </StyledNavLink>
        ))}
      </Nav>
    </AppHeader>
  );
};

export default Navbar;
