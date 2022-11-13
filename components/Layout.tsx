import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';

const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 83vh;
  margin-left: 5vw;
`;

function Layout({ children }: { children: any }) {
  return (
    <>
      <NavBar />
      <LayoutContent>
        {children}
      </LayoutContent>
      <Footer />
    </>
  )
};

export default Layout;