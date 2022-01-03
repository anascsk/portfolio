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
  SocialIcons,
} from "../styles/Showcase.style";
import { Button } from "../styles/button.style";

let CodingLogo = require("../images/coding.png");

const Showcase = () => {
  return (
    <Container>
      <Left>
        <h1>Hello World</h1>
        <h2><span>It's</span>MOHAMMED ANAS</h2>
        <h3>Frontend Developer</h3>
        <p>Building Responsive and fgjh;siodjg;oifdejg</p>
        <p>
          <Button>Download CV</Button>
        </p>
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
