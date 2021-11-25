import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Title>ABOUT ME</Title>
      <div className="experience-section">
        <Paragraph>
          Hello! I'm D'Artagnan von Pingel.
          <Br />
          I'm a web developer from Lehi, UT, and I'm a Full Stack Web graduate
          from{" "}
          <Lambda href="https://www.bloomtech.com/" target="_blank">
            <Span>BloomTech</Span>
          </Lambda>{" "}
          (Formerly known as Lambda School). I've really enjoyed learning how to
          design clean, responsive, and functional web pages using React,
          Javascript, Typescript, HTML, CSS, and many more libraries. Check out
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
          <Br />I just finished my first year of web development, and I haven't
          looked back once. I have a burning passion for this field and I'm
          excited to see what is next for it!
        </Paragraph>
        <Experience>
          <Title2>EXPERIENCE</Title2>
          <ListDiv>
            <ExperienceTitle>Front End</ExperienceTitle>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Vanilla JS</li>
              <li>React</li>
              <li>Redux</li>
              <li>Styled Components</li>
            </ul>
          </ListDiv>
          <ListDiv>
            <ExperienceTitle>Back End</ExperienceTitle>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>JSON</li>
            </ul>
          </ListDiv>
          <ListDiv>
            <ExperienceTitle>Other Tech/Languages</ExperienceTitle>
            <ul>
              <li>Git/GitHub</li>
              <li>SQLite3</li>
              <li>Python</li>
              <li>Jest</li>
              <li>RTL</li>
              <li>Cypress</li>
              <li>Postman</li>
              <li>RESTful APIs</li>
              <li>Insomnia</li>
            </ul>
          </ListDiv>
        </Experience>
      </div>
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
  font-size: 1.2rem;
  line-height: 1.2;
  width: 450px;
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

const Experience = styled.div`
  margin: 0 auto;
  border: 1px solid #ee2f56;
  background: #ee2f56;
  width: 450px;
  padding: 0;
  opacity: 0;
  animation: ${kf} 1s forwards;
  animation-delay: 0.4s;
  border-radius: 15px;
`;

const ListDiv = styled.div`
  color: white;
  width: 450px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 25px auto;
  opacity: 0;
  animation: ${kf} 1s forwards;
  animation-delay: 0.7s;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    justify-content: space-evenly;
    margin: 0 auto;
    text-align: center;
    padding: 0;

    li {
      font-size: 1rem;
      margin: 5px 10px 5px 10px;
    }
  }
`;

const Title2 = styled(Title)`
  animation-delay: 0.5s;
  margin: 25px 0 -20px 0;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.2rem;
  border-bottom: 1px solid white;
  padding: 5px;
`;

export default About;
