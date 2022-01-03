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
  SocialIcons,
} from "../styles/Showcase.style";
import { Button } from "../styles/button.style";

let CodingLogo = require("../images/coding.png");

const Showcase = () => {
  return (
    <Container>
      <Left>
        <H1>Hello World</H1>
        <H2><span>It's</span>MOHAMMED ANAS</H2>
        <P>Building resposive web apps with the help of React.js</P>
        <P>
          <Button>Download CV</Button>
        </P>
      </Left>
      <Center>
        <img src={CodingLogo} alt="" />
      </Center>
      <Right>
        <SocialIcons>
          <TiSocialLinkedinCircular />
        </SocialIcons>
        <SocialIcons>
          {" "}
          <TiSocialGithubCircular />
        </SocialIcons>
        <SocialIcons>
          {" "}
          <TiSocialTwitterCircular />
        </SocialIcons>
        <SocialIcons>
          <TiSocialAtCircular />
        </SocialIcons>
      </Right>
    </Container>
  );
};

export default Showcase;
