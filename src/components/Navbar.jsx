import { useState } from "react";
import {Link} from 'react-scroll'

import {
  Container,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style.js";

import { CgMenuMotion } from "react-icons/cg";
import { CgMenuHotdog } from "react-icons/cg";


const Navbar = () => {
  const [extendedNavbar, setExtendedNavbar] = useState(false);
  return (
    <Container id="Home" extendedNavbar={extendedNavbar }>
      <NavbarInnerContainer>
        <LeftContainer>
          {/* <Logo src={anascoder}></Logo> */}
          <h1> &lt;anascoder /&gt;</h1>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink>
            <Link to="Home" smooth={true}>Home</Link></NavbarLink>
            {/* <NavbarLink><Link to="about" smooth={true}>About Me</Link></NavbarLink> */}
            <NavbarLink><Link to="projects" smooth={true}>Projects</Link></NavbarLink>

            <NavbarLink><Link to="contact" smooth={true}>Hire Me</Link>
            </NavbarLink>



            <OpenLinksButton
              onClick={() => {
                setExtendedNavbar((current) => !current);
              }}
            >
              {extendedNavbar ? <CgMenuMotion /> : <CgMenuHotdog />}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendedNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About Me</NavbarLinkExtended>
          <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Hire Me</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </Container>
  );
};

export default Navbar;
