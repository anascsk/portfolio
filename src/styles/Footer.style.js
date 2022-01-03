import styled from "styled-components";

export const FooterContainer = styled.div`
background-color: #241d2b;
border-radius: 40px 40px 0px 0px ;
padding: 50px 20px 50px 20px ;

`

export const BottomFooter = styled.div`
 margin-top: 5.5rem;
  padding: 0 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

}

`;
export const FooterLine = styled.div``;
export const SocialMedia = styled.div`
padding: 8px;
font-size: 24px;
color: white;
cursor: pointer;
&:hover{
    color: #784cfb;
}

`;
// export const FollowMe = styled.div``;