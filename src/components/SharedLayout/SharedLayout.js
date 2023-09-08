import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Nav } from 'components/App.styled';
import { Container, StyleNav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <StyleNav to="/">Home</StyleNav>
          <StyleNav to="/movies">Movies</StyleNav>
        </Nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
