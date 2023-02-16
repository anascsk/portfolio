import {
  TiSocialAtCircular,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  
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
        <h1>Hello World!</h1>
        <h2>
          <span>It's</span>MOHAMMED ANAS
        </h2>
        <h3>Frontend Developer</h3>
        <p>
          Building Responsive Web Apps by Converting Designs into Clean and
          Reusable Codes.
        </p>
        <p>
          <a href="https://drive.google.com/file/d/11UPMGhOwuWdjDft0Qly2KAKrFsxpDvo4/view?usp=share_link"><Button>Download CV</Button></a>
        </p>
      </Left>
      <Center>
        <img src={CodingLogo} alt="" />
      </Center>
      <Right>
        <SocialIcons>
          <a href="https://linkedin.com/in/anascsk">
           
            <TiSocialLinkedinCircular />
          </a>
        </SocialIcons>
        <SocialIcons>
         
          <a href="https://github.com/anascsk">
            <TiSocialGithubCircular />
          </a>
        </SocialIcons>
        {/* <SocialIcons>
         
          <a href="https://twitter.com/">
            <TiSocialTwitterCircular />
          </a>
        </SocialIcons> */}
        <SocialIcons>
          <a href="mailto:anascoder7@gmail.com">
            <TiSocialAtCircular />
          </a>
        </SocialIcons>
      </Right>
    </Container>
  );
};

export default Showcase;
