import React from "react";
import styled, { keyframes } from "styled-components";

const Projects = () => {
  return (
    <div>
      <Title>MY PROJECTS</Title>
      <Paragraph>
        •{" "}
        <Project1
          href="https://react-github-user-card-gules.vercel.app/"
          target="_blank"
        >
          GitHub User Finder
        </Project1>{" "}
        (2/9/2021)
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
  text-align: center;
  letter-spacing: 0.2px;
  word-spacing: 1px;
`;

const Project1 = styled.a`
  color: white;
  font-weight: 700;
  text-decoration: solid underline white 2px;
`;

export default Projects;
