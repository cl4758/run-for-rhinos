import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';
import { useRouter } from 'next/router';
import { IconMenu2 } from '@tabler/icons';
import { useState } from 'react';
import overlay from '../public/black.jpg';
import Image from 'next/image';


const NavLinks = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  display: flex;
  justify-content: space-around;
  min-height: 6vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  top: 8vh;
  left: 4vw;
  @media (min-width: 768px) {
    display: none;
  }
  z-index: 1;
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 2%;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 1.1em;
  @media (min-width: 768px) {
    &::before {
    transition: 200ms;
    height: 5%;
    content: "";
    position: absolute;
    background-color: #9E9EFF;
    width: 0%;
    bottom: 10px;
  }
  &.active::before {
    height: 5%;
    content: "";
    position: absolute;
    background-color: #9E9EFF;
    bottom: 10px;
    opacity: 1;
    width: 80%;
    }
  }

  &:hover {
    opacity: 1;
  }

  &:hover::before {
    width: 80%;
}
  @media (max-width: 768px) {
    padding-top: 8%;
    &.active {
      color: #9E9EFF;
    }
  }

`;

const Title = styled.h2`
  color: inherit;
  align-items: center;
  font-weight: 500;
  @media (max-width: 768px) {
    width: 50%;
  }
  z-index: 1;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #9E9EFF;
  color: inherit;
  font-size: inherit;
  width: 25%;
  height: 50%;
  align-self: center;
  margin-left: auto;
  z-index: 1;
  > a {
    color: inherit;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
  font-family: inherit;
`;

const MenuBurger = styled.div`
  /* border-radius: 3px; */
  /* border: 2px solid #9E9EFF; */
  background-color: transparent;
  font-size: inherit;
  @media (min-width: 768px) {
    display: none;
  }
  width: fit-content;
  height: fit-content;
  align-self: center;
  /* margin-right: 3vw; */
  margin-left: auto;
  z-index: 1;
  /* > a {
    color: inherit;
    text-decoration: none;
  } */
`;

const NavWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 2vw 0 2vw;
    height: 13vh;
    & ${Title} {
    grid-column: 1;
    }
    & ${NavLinks}, ${MenuBurger} {
      grid-column: 2;
    }
    & ${Button} {
      grid-column: 3;
    }
  }
  align-content: center;
  background-blend-mode: darken;
  display: flex;
  margin: 0 4vw 0 4vw;
  height: 10vh;
`;

const HeaderOverlay = styled(Image)`
@media (min-width: 768px) {
  height: 14vh;
}
  position: fixed;
  height: 10vh;
  width: 100vw;
  overflow: hidden;
  opacity: 15%;
`;

const MenuOverlay = styled(Image) <{ background: string }>`
@media (min-width: 768px) {
  display: none;
}
  position: fixed;
  top: 10vh;
  left: 0;
  height: 13vh;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
  opacity: 100%;
  ${props => {
    if (props.background === '/') return `opacity: 15%`
  }}
`;

interface NavigationProps {
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}


function NavBar({ links }: NavigationProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const items = links.map((link, index) => {
    return (
      <NavLink
        key={link.link} href={link.link} className={router.pathname == link.link ? "active" : ""} onClick={handleOpen}>
        {link.label}</NavLink>
    );
  });

  return (
    <div>
      <HeaderOverlay
        alt="overlay"
        src={overlay}
        placeholder="blur"
      />
      <NavWrapper>
        <Title>Run for Rhinos</Title>
        <MenuBurger onClick={handleOpen}><IconMenu2 /></MenuBurger>
        {open ? <>
          <MenuOverlay alt="overlay"
            src={overlay}
            placeholder="blur"
            background={router.pathname} />
          <DropdownMenu>{items}</DropdownMenu></> : <></>}
        <NavLinks>
          {items}
        </NavLinks>
        <Button>
          <a href="https://www.gofundme.com/f/running-across-america-for-rhinos" rel="noreferrer" target="_blank">
            Donate</a>
        </Button>
      </NavWrapper>
    </div>
  );
}

export default NavBar;