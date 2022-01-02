import {
  TiSocialAtCircular,
  
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import {
  Container,
  Right,
  Center,
  Left,
  H1,
  H2,
  P,
  
} from "../styles/Showcase.style";
import {Button} from '../styles/button.style'


let CodingLogo = require("../images/coding.png");

const Showcase = () => {
  return (
    <Container>
      <Left>
        <H1>Hello World</H1>
        <H2>MOHAMMED ANAS</H2>
        <P>Building resposive web apps with the help of React.js</P>
        <P><Button>Download CV</Button></P>
      </Left>
      <Center><img src={CodingLogo} alt="" /></Center>
      <Right><TiSocialLinkedinCircular/>
      <TiSocialGithubCircular/>
      <TiSocialTwitterCircular/>
      <TiSocialAtCircular/>
      </Right>
    </Container>
  );
};

export default Showcase;
