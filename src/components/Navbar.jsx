import { useState } from "react";

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

let anascoder = require("../images/anascoder.png");
const Navbar = () => {
  const [extendedNavbar, setExtendedNavbar] = useState(false);
  return (
    <Container extendedNavbar={extendedNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={anascoder}></Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About Me</NavbarLink>
            <NavbarLink to="/projects">Projects</NavbarLink>

            <NavbarLink to="/contact">Hire Me</NavbarLink>

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
