import React from "react";
import { DivWrapper, Icons, Text } from "../styles/Skills.style";
import bootstrap from "../assets/bootstrap.svg";
import css from "../assets/css.svg";
import figma from "../assets/figma.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import mongodb from "../assets/mongodb.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import sass from "../assets/sass.svg";

import vscode from "../assets/vscode.svg";
import styledc from "../assets/styledc.svg";
const Skills = () => {
  return (
    <>
      <DivWrapper id="skills">
        <Text>Tech & tools</Text>
        <Icons data-aos="zoom-in">
          <img src={react} alt="styledc" title="react" />
          <img src={js} alt="javascript" title="javascript" />
          <img src={html} alt="html" title="html" />
          <img src={css} alt="css" title="css" />
          <img
            src={styledc}
            alt="styled-components"
            title="styled-components"
          />
          <img src={bootstrap} alt="bootstrap" title="bootstrap" />
          <img src={sass} alt="sass" title="sass" />

          <img src={mongodb} alt="mongodb" title="mongodb" />
          <img src={redux} alt="redux" title="redux" />
          <img src={git} alt="git" title="git" />
          <img src={github} alt="github" title="github" />
          <img src={vscode} alt="vscode" title="vs code" />
          <img src={git} alt="terminal" title="terminal" />
          <img src={figma} alt="figma" title="figma" />
        </Icons>
      </DivWrapper>
    </>
  );
};

export default Skills;
