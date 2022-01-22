import styled from "styled-components";
import {mobile, tablet} from '../responsive'

export const End = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterContainer = styled.div`
  background-color: #241d2b;
  max-width: 99vw;
  border-radius: 40px 40px 0px 0px;
  padding: 50px 20px 50px 20px;
  ${mobile({  })}
`;

export const BottomFooter = styled.div`
  margin-top: 5.5rem;
  padding: 0 1.7rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  ${mobile({ flexDirection: "column", marginTop: "0"})}
`;
export const Copyright = styled.div`
  color: white;
  font-family: poppins;
  margin-left: 15%;
  span {
    color: #784cfb;
    font-size: 24px;
    margin-left: 5px;
    font-family: ubuntu;
    cursor: pointer;
  }
`;
export const FollowMe = styled.div`
  display: flex;
  justify-content: space-around;

  span {
    padding: 8px;
    font-size: 20px;
    color: white;
    font-family: poppins;
    color: coral;
    ${mobile({ display: "none" })}
  }
`;

export const SocialMedia = styled.div`
  padding: 8px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #784cfb;
  }
`;
export const BackToTopContainer = styled.div`
display: flex;
justify-content: end;
`
export const BackToTop = styled.div`
  background-color: #784cfb;
  color: #241d2b;
  font-size: 60px;
  height: 50px;
  width: 50px;
  margin-right: 30px;
  border-radius: 50%;
  display: inline-block;
  font-size: 40px;
display: flex;
align-items: center;
justify-content: center;
  text-align: center;
  cursor: pointer;
  &:hover {
      background-color: #d8d8d8;
  }

`;
