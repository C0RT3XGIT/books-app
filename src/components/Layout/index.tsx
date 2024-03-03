import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import { FlexColumn } from '../UI/Flex';
import styled from 'styled-components';

const PageWrapper = styled(FlexColumn)`
  padding: 20px;
`;

const Layout = () => {
  return (
    <FlexColumn>
      <Navbar />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </FlexColumn>
  );
};

export default Layout;
