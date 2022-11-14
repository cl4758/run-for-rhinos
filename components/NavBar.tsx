import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';
import { useRouter } from 'next/router';


const NavLinks = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  /* justify-self: center; */
  display: flex;
  justify-content: space-around;
  min-height: 6vh;
  /* .active {
     text-decoration: underline;
  }  */
`;
const NavLink = styled(Link) <{ active: boolean }>`
  /* box-sizing: border-box; */
  color: inherit;
  text-decoration: none;
  padding: 2%;
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
  position: relative;
  &::before {
    transition: 200ms;
    height: 5%;
    content: "";
    position: absolute;
    background-color: #9E9EFF;
;
    width: 0%;
    bottom: 10px;
  }
  &.active::before {
    height: 5%;
    content: "";
    position: absolute;
    background-color: #9E9EFF;
;
    bottom: 10px;
    opacity: 1;
    width: 80%;
  }

  &:hover {
    opacity: 1;
  }

  &:hover::before {
    width: 80%;
}
`;

const Title = styled.h2`
  color: inherit;
  align-items: center;
  margin-left: 2vw;
  font-weight: 500;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #9E9EFF;
  /* color: palevioletred; */
  color: inherit;
  font-size: inherit;
  width: 25%;
  height: 50%;
  align-self: center;
  margin-right: 2vw;
  margin-left: auto;
  /* background-color: green;
  border-radius: 5px; */
  > a {
    color: inherit;
    text-decoration: none;
  }
`;

const NavWrapper = styled.div`
  /* display: flex;
  margin-bottom: 2vh; */

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  & ${Title} {
    grid-column: 1;
  }
  & ${NavLinks} {
    grid-column: 2;
  }
  & ${Button} {
    grid-column: 3;
  }
`;



function NavBar() {
  const router = useRouter();
  return (
    <NavWrapper>
      <Title>Run for Rhinos</Title>
      <NavLinks>
        <NavLink href="/" className={router.pathname == "/" ? "active" : ""} active={router.pathname == "/"}>Home</NavLink>
        <NavLink href="/map" className={router.pathname == "/map" ? "active" : ""} active={router.pathname == "/map"}>Map</NavLink>
        <NavLink href="/stats" className={router.pathname == "/stats" ? "active" : ""} active={router.pathname == "/stats"}>Stats</NavLink>
        <NavLink href="/contact" className={router.pathname == "/contact" ? "active" : ""} active={router.pathname == "/contact"}>Contact</NavLink>
      </NavLinks>
      <Button><a href="https://www.gofundme.com/f/running-across-america-for-rhinos" rel="noreferrer" target="_blank">Donate</a></Button>
    </NavWrapper>
  );
}

export default NavBar;