import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const NavWrapper = styled.div`
  display: flex;
  margin-bottom: 2vh;
`;
const NavLinks = styled.div`
  box-sizing: border-box;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2vh;
  justify-self: center;
  display: flex;
  justify-content: space-around;
  min-height: 6vh;
  .active {
     border-style: solid;
  }
  
`;
const NavLink = styled(Link)`
  box-sizing: border-box;
  color: inherit;
  text-decoration: none;
  padding: 2%;
  border: 1;
  &:hover {
    border-style: solid;
  }
`;

function NavBar() {
  const router = useRouter();
  return (
    <NavWrapper>
      <NavLinks>
        <NavLink href="/" className={router.pathname == "/" ? "active" : ""}>Home</NavLink>
        <NavLink href="/map" className={router.pathname == "/map" ? "active" : ""}>Map</NavLink>
        <NavLink href="/stats" className={router.pathname == "/stats" ? "active" : ""}>Stats</NavLink>
        <NavLink href="/contact" className={router.pathname == "/contact" ? "active" : ""}>Contact</NavLink>
      </NavLinks>
    </NavWrapper>
  );
}

export default NavBar;