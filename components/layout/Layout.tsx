import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';

const LayoutContent = styled.div`
  display: flex;
  /* margin-left: 5vw;
  margin-right: 5vw; */
  /* margin: 11vh 5vw 5vh 5vw; */
  padding: 13vh 0 5vh 0;
  justify-content: center;
  height: 100%;
  /* @media (max-width: 768px) {
    height: 100%;
  } */
  box-sizing: border-box;
`;

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Layout({ children }: { children: any }) {
  const routes = [{ link: '/', label: 'Home' },
  { link: '/tracking', label: 'Tracking' },
  // { link: '/dashboard', label: 'Stats', },
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