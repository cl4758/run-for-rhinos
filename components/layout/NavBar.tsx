import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';
import { useRouter } from 'next/router';
import { IconMenu2 } from '@tabler/icons';
import { useState } from 'react';
import overlay from '../../public/black.jpg';
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
  z-index: 1;
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 2%;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 1em;
  @media (min-width: 768px) {
    &::before {
    transition: 200ms;
    height: 5%;
    content: "";
    position: absolute;
    background-color: #9ad5f4;
    width: 0%;
    bottom: 10px;
  }
  &.active::before {
    height: 5%;
    content: "";
    position: absolute;
    background-color: #9ad5f4;
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
      color: #9ad5f4;
    }
  }
  z-index: 1;
`;

const Title = styled.h2`
  color: inherit;
  align-items: center;
  font-weight: 500;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 4vw;
  }
  z-index: 1;
  margin-left: 1vw;
  font-family: 'Rubik Dirt', sans-serif;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #9ad5f4;
  color: inherit;
  font-size: 1em;
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
  &:hover {
    background-color: #282828;
  }
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
  height: 10vh;
  margin: 0;
  position: fixed;
  width: 94vw;
  z-index: 1;
`;

const HeaderOverlay = styled(Image)`
@media (min-width: 768px) {
  height: 13vh;
}
  position: fixed;
  height: 10vh;
  width: 100vw;
  overflow: hidden;
  opacity: 15%;
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (min-width: 768px) {
    display: none;
  }
  padding-left: 3vw;
  z-index: 1;
`;

const DropdownMenuWrapper = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  @media (min-width: 768px) {
    display: none;
  }
  z-index: 1;
  height: fit-content;
`;

const MenuOverlay = styled(Image) <{ background: string }>`
@media (min-width: 768px) {
  display: none;
}
  position: absolute;
  left: 0;
  height: 110%;
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
        {open ? <DropdownMenuWrapper>
          <MenuOverlay alt="overlay"
            src={overlay}
            placeholder="blur"
            background={router.pathname} />
          <DropdownMenu>{items}</DropdownMenu></DropdownMenuWrapper> : <></>}
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