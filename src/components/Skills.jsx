import React from "react";
import { DivWrapper, Icons, Text } from "../styles/Skills.style";
import bootstrap from "../assets/bootstrap.svg";
import css from "../assets/css.svg";
import figma from "../assets/figma.svg";

import github from "../assets/github.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";

import react from "../assets/react.svg";

import sass from "../assets/sass.svg";
import router from "../assets/react-router.png";
import mui from "../assets/material-ui.png";

import vscode from "../assets/vscode.svg";
import styledc from "../assets/styledc.svg";
import firebase from "../assets/firebase.png";
import chromedev from "../assets/chrome-dev.png";
const Skills = () => {
  return (
    <>
      <DivWrapper id="skills">
        <Text>Tech & Tools</Text>
        <Icons data-aos="zoom-in">
          <img src={react} alt="styledc" title="React js" />
          <img src={js} alt="javascript" title="JavaScript" />
          <img src={html} alt="html" title="HTML5" />
          <img src={css} alt="css" title="CSS3" />
          <img
            src={styledc}
            alt="styled-components"
            title="styled-components"
          />
          <img src={bootstrap} alt="bootstrap" title="Bootstrap" />
          <img src={sass} alt="sass" title="sass" />
          <img src={router} alt="react-router" title="React Router" />
          <img src={github} alt="github" title="Github" />
          <img src={vscode} alt="vscode" title="vscode" />
          <img src={figma} alt="figma" title="Figma" />
          <img src={mui} alt="material-ui" title="Material UI" />
          <img src={firebase} alt="firebase" title="Firebase" />
          <img src={chromedev} alt="chromedev" title="Chrome Dev Tools" />
        </Icons>
      </DivWrapper>
    </>
  );
};

export default Skills;
