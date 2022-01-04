import React from "react";
import {
  BackToTop,
  BackToTopContainer,
  BackToTopIcon,
  BottomFooter,
  Copyright,
  End,
  FollowMe,
  FooterContainer,
 
  SocialMedia,
} from "../styles/Footer.style";
import {FiGithub, FiInstagram, FiLinkedin, FiTwitter} from 'react-icons/fi'
import {MdLinearScale} from 'react-icons/md'
import {IoIosArrowDropupCircle} from 'react-icons/io'

const Footer = () => {
  return (
      <>
      <End><MdLinearScale/></End>
    <FooterContainer>
    <BackToTopContainer><BackToTop><IoIosArrowDropupCircle/></BackToTop></BackToTopContainer>
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
