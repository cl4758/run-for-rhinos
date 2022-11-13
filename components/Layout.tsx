import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';

const LayoutContent = styled.div`
  display: flex;
  /* flex-direction: column; */
  min-height: 80vh;
  margin-left: 5vw;
  margin-right: 5vw;
  justify-content: center;
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