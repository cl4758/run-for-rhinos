import Link from 'next/link';
import styled from 'styled-components';

const NavWrapper = styled.div`
box-sizing: border-box;
  display: flex;
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
  
`;
const NavLink = styled(Link)`
  box-sizing: border-box;
  color: inherit;
  text-decoration: none;
  padding: 2%;
  border: 1%;
  &:hover {
    border-style: solid;
  }
`;

function NavBar() {
  return (
    <NavWrapper>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/map">Map</NavLink>
        <NavLink href="/stats">Stats</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </NavLinks>
    </NavWrapper>
  );
}

export default NavBar;