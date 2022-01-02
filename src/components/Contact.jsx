import "../styles/Contact.style";
import {
  ContactBox,
  ContactForm,
  ContactIcon,
  ContactInfo,
  Container,
  InfoWrap,
  Row,
} from "../styles/Contact.style";

const Contact = () => {
  return (
    <Container>
      <ContactBox>
        Get in touch Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis, beatae.
        <ContactInfo>
          <InfoWrap>
            <ContactIcon>ICON</ContactIcon>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa!
          </InfoWrap>
          <InfoWrap>
            <ContactIcon>ICON</ContactIcon>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa!
          </InfoWrap>
          <InfoWrap>
            <ContactIcon>ICON</ContactIcon>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa!
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
            <textarea name="message" placeholder="Message"></textarea>
          </Row>
        </ContactForm>
      </ContactBox>
    </Container>
  );
};

export default Contact;
