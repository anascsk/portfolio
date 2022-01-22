import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../responsive";

export const Container = styled.div`
  width: 98vw;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: white;
  
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: start;
  margin-left: 55px;
  margin-top: 5px;
  color: black;
  h1{
    ${tablet({ fontSize: "20px" })}
    ${mobile({ fontSize: "15px" })}
  }
  ${tablet({ fontSize: "15px" })}
  ${mobile({ marginLeft: "20px", flex: "40%" })}
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-left: 0%;
  margin: auto;
  margin-right: 5%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NavbarLink = styled.div`
  color: #949294;
  font-size: large;
  font-family: Poppins, sans-serif;
  text-decoration: none;
  margin: 10px;
  transition: transform 0.2s;
  cursor: pointer;
  font-weight: 500;
  @media (max-width: 780px) {
    display: none;
  }
  &:hover {
    transform: scale(1.05);
    color: #6b5ad2;
    transform: ease;
  }
`;

export const NavbarLinkExtended = styled.div`
  color: #949294;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 0px 0px 25px 20px;
  &:hover {
    transform: scale(1.05);
    color: #6b5ad2;
    transform: ease;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #949294;
  font-size: 45px;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 780px) {
    display: none;
  }
`;
export const NavbarExtendedContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  @media (min-width: 780px) {
    display: none;
  }
`;
