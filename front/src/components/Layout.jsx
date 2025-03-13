import React from 'react';
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <Container>
      <Menu />
      <Outlet />
    </Container>
  );
};

export default Layout;
