import "../styles/Contact.style";
import {FaPaperPlane,FaPhone,} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {
  ContactBox,
  ContactForm,
  ContactIcon,
  ContactInfo,
  Container,
  H2,
  InfoWrap,
  Row,
} from "../styles/Contact.style";
import {Button} from '../styles/button.style'
import emailjs from "emailjs-com";

const Contact = () => {

  const mailMe = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_anascoder', 'anascoder7', e.target, 'user_Ylln1E4PL2wNwmCaAOVMk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  } 
  return (
    <Container id="contact">
      <H2>Contact Me</H2>
      <ContactBox>
        
        <ContactInfo>
        {/* <h3>Get in touch</h3> */}
        {/* <p> Got some ideas? Don't hesitate to reach me out</p> */}
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
        <ContactForm onSubmit={mailMe}>
          {/* <h3>Contact Me</h3> */}

          <Row>
            <input type="text" placeholder="First Name" name="firstname"/>

            <input type="text" placeholder="Last Name" name="lastname"/>
          </Row>
          <Row>
            <input type="text" placeholder="Phone" name="phone"/>
            <input type="email" placeholder="Email" name="email"/>
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
