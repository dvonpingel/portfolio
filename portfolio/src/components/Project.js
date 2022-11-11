import React from "react";
import styled, { keyframes } from "styled-components";

const Project = ({ title, date, srcHref, projectHref, delay, explanation }) => {
  const Paragraph = styled.p`
    opacity: 0;
    animation: ${kf} 1s forwards;
    animation-delay: ${delay};
    color: white;
    font-family: "Cairo", sans-serif;
    font-size: 1.6rem;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.2px;
    word-spacing: 1px;
  `;
  return (
    <Paragraph>
      •{" "}
      {projectHref ? (
        <Project1 href={projectHref} target="_blank">
          {title}
        </Project1>
      ) : (
        <AltProjectTitle>{title}</AltProjectTitle>
      )}{" "}
      {date}{" "}
      {srcHref && (
        <SourceCode href={srcHref} target="_blank">
          SOURCE CODE
        </SourceCode>
      )}
      <NoteParagraph>{explanation}</NoteParagraph>
    </Paragraph>
  );
};

const kf = keyframes`
    100% {
        opacity: 1;
        transform: scale(1);
        transform: translate(0);
    }
`;

const Paragraph = styled.p`
  opacity: 0;
  animation: ${kf} 1s forwards;
  animation-delay: 0.2s;
  color: white;
  font-family: "Cairo", sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.2px;
  word-spacing: 1px;
`;

const NoteParagraph = styled(Paragraph)`
  font-size: 1rem;
  width: 475px;
  margin: 10px auto;
`;

const SourceCode = styled.a`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: white;
  font-weight: 900;
  &:hover {
    text-decoration: underline 1px;
  }
`;

const Project1 = styled.a`
  color: white;
  font-weight: 700;
  text-decoration: solid underline white 2px;
`;

const AltProjectTitle = styled.div`
  color: white;
  font-weight: 700;
  display: inline;
`;

export default Project;
