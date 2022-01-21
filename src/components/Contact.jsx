import "../styles/Contact.style";
import {FaPaperPlane,FaPhone,} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {
  ContactBox,
  ContactForm,
  ContactIcon,
  ContactInfo,
  Container,
  InfoWrap,
  Row,
} from "../styles/Contact.style";
import {Button} from '../styles/button.style'

const Contact = () => {
  return (
    <Container id="contact">
      <ContactBox>
        
        <ContactInfo>
        <h3>Get in touch</h3>
        <p> Got some ideas? Don't hesitate to reach me out</p>
          <InfoWrap>
            <ContactIcon><ImLocation2/></ContactIcon>
            Calicut, Kerala
          </InfoWrap>
          <InfoWrap>
            <ContactIcon><FaPaperPlane/></ContactIcon>
            anascoder7@gmail.com
          </InfoWrap>
          <InfoWrap>
            <ContactIcon><FaPhone/></ContactIcon>
           +91 7012 691 803
          </InfoWrap>
        </ContactInfo>
        <ContactForm>
          <h3>Contact Me</h3>
          <Row>
            <input type="text" placeholder="First Name" />

            <input type="text" placeholder="Last Name" />
          </Row>
          <Row>
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
          </Row>
          <Row>
            <textarea name="message" placeholder=""></textarea>
          </Row>
          <Button >SEND</Button>
        </ContactForm>
      </ContactBox>
    </Container>
  );
};

export default Contact;
