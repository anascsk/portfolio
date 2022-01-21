import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: white;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: start;
  margin-left: 55px;
  margin-top: 5px;
  color: black;

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

export const NavbarLinkExtended = styled(Link)`
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

  @media (min-width: 780px) {
    display: none;
  }
`;
export const NavbarExtendedContainer = styled.div`
position: relative;
height: 90vh;
width: 100vw;
 
  display: flex;
  flex-direction: column;
  align-items: center;
 

  @media (min-width: 780px) {
    display: none;
  }
`;
