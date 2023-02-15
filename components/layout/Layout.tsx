import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';
import { Manrope } from '@next/font/google';

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--manrope-font'
});

const LayoutContent = styled.div`
  display: flex;
  padding: 13vh 0 5vh 0;
  justify-content: center;
  height: 100%;
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
  { link: '/about', label: 'About' }];

  return (
    <LayoutWrapper className={manrope.className}>
      <NavBar links={routes} />
      <LayoutContent>
        {children}
      </LayoutContent>
      <Footer />
    </LayoutWrapper>
  )
};

export default Layout;