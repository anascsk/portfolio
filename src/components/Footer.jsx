import React from "react";
import {
  BottomFooter,
  Copyright,
  End,
  FollowMe,
  FooterContainer,
  FooterLine,
  SocialMedia,
} from "../styles/Footer.style";
import {FiGithub, FiInstagram, FiLinkedin, FiTwitter} from 'react-icons/fi'
import {MdLinearScale} from 'react-icons/md'

const Footer = () => {
  return (
      <>
      <End><MdLinearScale/></End>
    <FooterContainer>
      <BottomFooter>
        <Copyright>
          Copyright © 2022 All rights reserved | Made with ❤️ by <span>anascoder</span>
        </Copyright>
        <FollowMe>
          <span><MdLinearScale/><MdLinearScale/>Follow me </span>
          <SocialMedia><FiLinkedin/></SocialMedia>
          <SocialMedia><FiGithub/></SocialMedia>
          <SocialMedia><FiTwitter/></SocialMedia>
          <SocialMedia><FiInstagram/></SocialMedia>
        </FollowMe>
      </BottomFooter>
    </FooterContainer>
    </>
  );
};

export default Footer;
