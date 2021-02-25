import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Title>ABOUT ME</Title>
      <Paragraph>
        Hello! I'm D'Artagnan von Pingel.
        <Br />
        I'm a web developer from Lehi, UT, and I'm currently studying full stack
        at{" "}
        <Lambda href="https://lambdaschool.com/" target="_blank">
          <Span>Lambda School</Span>
        </Lambda>
        . I've been having a lot of fun learning how to design clean and
        functional web pages using React, Javascript, HTML, and CSS. Check out
        some of my <Project to="/projects">projects</Project> here!
        <Br />
        Before making the decision to switch gears and get into full stack, I
        did a lot of work making various videos and animations. I had the
        pleasure of working with companies such as{" "}
        <Swig href="https://www.swignsweets.com/" target="_blank">
          Swig
        </Swig>
        ,{" "}
        <Aptive href="https://www.goaptive.com/" target="_blank">
          Aptive Environmental
        </Aptive>
        ,{" "}
        <Savory href="https://savory.mercatopartners.com/" target="_blank">
          Savory
        </Savory>
        ,{" "}
        <Miss href="https://missutah.org/" target="_blank">
          Miss Utah Organization
        </Miss>
        ,{" "}
        <TedX
          href="https://www.ted.com/about/programs-initiatives/tedx-program"
          target="_blank"
        >
          TedX
        </TedX>
        , and many more. Through these experiences I learned a lot about self
        discipline, organization, and I gained a sustainable strategy for time
        management, as well as a solid work ethic.
        <Br />
        At 20 years old I feel well prepared to move forward in this industry
        after graduating at Lambda. I've got plenty to learn, given that this
        industry will forever be developing, and I'm eager to keep going.
      </Paragraph>
    </div>
  );
};

const kf = keyframes`
    100% {
        opacity: 1;
        transform: scale(1);
        transform: translate(0);
    }
`;

const Title = styled.h2`
  opacity: 0;
  transform: scale(0.85);
  transform: translate(0, -30px);
  animation: ${kf} 0.8s forwards;
  color: white;
  font-family: "Cairo", sans-serif;
  font-weight: 900;
  font-style: italic;
  text-align: center;
  margin-top: 75px;
  margin-bottom: -10px;
`;

const Paragraph = styled.p`
  opacity: 0;
  animation: ${kf} 1s forwards;
  animation-delay: 0.2s;
  color: white;
  font-family: "Cairo", sans-serif;
  font-size: 1.4rem;
  line-height: 1.2;
  width: 600px;
  margin: 50px auto;
  letter-spacing: 0.2px;
  word-spacing: 1px;
`;

const Span = styled.span`
  color: #ee2f56;
  transition: 0.2s;
  &:hover {
    color: white;
    text-decoration: underline;
    transition: 0.2s;
  }
`;

const Br = styled.br`
  display: block;
  content: "";
  margin-top: 25px;
`;

const Project = styled(Link)`
  color: white;
  font-weight: 700;
  text-decoration: solid underline white 2px;
`;

const Lambda = styled.a`
  text-decoration: none;
  color: white;
  transition: 0.2s;
  font-weight: 700;
  &:hover {
    color: white;
    text-decoration: underline;
    transition: 0.2s;
  }
`;
const Swig = styled(Lambda)`
  text-decoration: none;
`;
const Aptive = styled(Lambda)`
  text-decoration: none;
`;
const Savory = styled(Lambda)`
  text-decoration: none;
`;
const Miss = styled(Lambda)`
  text-decoration: none;
`;
const TedX = styled(Lambda)`
  text-decoration: none;
`;

export default About;
