import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';

const LayoutContent = styled.div`
  display: flex;
  margin-left: 5vw;
  margin-right: 5vw;
  margin: 11vh 5vw 5vh 5vw;
  justify-content: center;
  /* height: 100%; */
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Layout({ children }: { children: any }) {
  const routes = [{ link: '/', label: 'Home' },
  { link: '/map', label: 'Map' },
  { link: '/stats', label: 'Stats', },
  { link: '/about', label: 'About' }];

  return (
    <LayoutWrapper>
      <NavBar links={routes} />
      <LayoutContent>
        {children}
      </LayoutContent>
      <Footer />
    </LayoutWrapper>
  )
};

export default Layout;