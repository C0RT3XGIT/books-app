import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import { FlexColumn } from '../UI/Flex';

const Layout = () => {
  return (
    <FlexColumn>
      <Navbar />
      <Outlet />
    </FlexColumn>
  );
};

export default Layout;
