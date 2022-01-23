import styled from "styled-components";
import { mobile, tablet } from "../responsive";

export const Container = styled.div`
  width: 98vw;
  max-height: 600px;
  display: flex;
  margin-bottom: 50px;
  ${mobile({ flexDirection: "column" })}
`;
export const Left = styled.div`
  flex: 40%;
  text-align: left;
  margin: auto;

  padding-left: 30px;
  color: #949294;
  ${mobile({ paddingLeft: "15px" })}


  h1 {
    font-size: 7vw;
    top: 30px;
    margin-left: 2%;
    color: #d8d8d8;
    margin-bottom: 2px;
    opacity: 0.6;
    margin-top: 0;
  
    ${tablet({ fontSize: "60px", paddingLeft: "1%" })}
  
  }

  h2 {
    font-size: 45px;
    color: #333133;
    margin-left: 15%;
    font-family: "Ubuntu", sans-serif;
    margin-bottom: 1px;
    ${tablet({ fontSize: "34px" })}
    ${mobile({ fontSize: "28px" })}
  }
  h3 {
    font-size: 25px;
    text-align: end;
    margin-top: 0;
    color: #784cfb;
    ${tablet({ fontSize: "20px" })}
    ${mobile({ textAlign: "center", marginLeft: "35%", fontSize: "15px" })}
  }

  p {
    font-size: 20px;
    margin-left: 20%;
    color: #333133;
    font-family: poppins;
    ${mobile({ fontSize: "18px" })}
  }
  span {
      font-size: 22px;
      margin-right: 5px;
      color: #949294;
      opacity: 0.6;
      ${tablet({ fontSize: "18px" })}
  }
`;
export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const P = styled.p``;
export const Center = styled.div`
  flex: 50%;
  text-align: center;
  margin: auto;
  opacity: 0.15;
  ${tablet({ display: "none" })}
`;
export const Right = styled.div`
  flex: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: 60px;
  color: #705edb;

  ${mobile({ display: "none" })}
  
`;
export const SocialIcons = styled.div`
  cursor: pointer;
  
  &:hover {
    color: #7288e7;
  }
`;
