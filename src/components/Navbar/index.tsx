import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from './config';

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 20px;
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
  return (
    <AppHeader>
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
