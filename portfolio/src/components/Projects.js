import React from "react";
import styled, { keyframes } from "styled-components";

const Projects = () => {
  return (
    <div>
      <Title>MY PROJECTS</Title>
      <Paragraph>
        •{" "}
        <Project1
          href="https://web-sprint-challenge-intro-to-react-seven.vercel.app/"
          target="_blank"
        >
          Rick and Morty Characters
        </Project1>{" "}
        (1/22/2021){" "}
        <SourceCode
          href="https://github.com/dvonpingel/web-sprint-challenge-intro-to-react"
          target="_blank"
        >
          SOURCE CODE
        </SourceCode>
      </Paragraph>
      <Paragraph>
        •{" "}
        <Project1
          href="https://react-github-user-card-gules.vercel.app/"
          target="_blank"
        >
          GitHub User Finder
        </Project1>{" "}
        (2/9/2021){" "}
        <SourceCode
          href="https://github.com/dvonpingel/React-Github-User-Card"
          target="_blank"
        >
          SOURCE CODE
        </SourceCode>
        <Br />
        <NoteParagraph>
          ^^ Created these simple projects as part of my program at lambda,
          practicing communication between API and the Front End
        </NoteParagraph>
      </Paragraph>
      <Paragraph2>
        •{" "}
        <Project1
          href="https://front-end-gamma-two.vercel.app/"
          target="_blank"
        >
          Anywhere Fitness Website
        </Project1>{" "}
        (3/5/2021){" "}
        <SourceCode
          href="https://github.com/BuildWeekAnywhereFitness/Front-End"
          target="_blank"
        >
          SOURCE CODE
        </SourceCode>
        <Br />
        <NoteParagraph>
          ^ Built in an Agile team of front-end and back-end developers. I was
          in charge of the 'client' route of the website front end, including
          styling, creating onboard screens and routing.
        </NoteParagraph>
      </Paragraph2>
      <Paragraph3>
        •{" "}
        <Project1 href="https://front-end-bice-phi.vercel.app/" target="_blank">
          Water My Plants Website
        </Project1>{" "}
        (4/2/2021){" "}
        <SourceCode
          href="https://github.com/TT41-Build-Week-Water-My-Plants/backend-dartagnan"
          target="_blank"
        >
          SOURCE CODE
        </SourceCode>
        <Br />
        <NoteParagraph>
          ^ Built in an Agile development team. I was in charge of the entire
          backend, creating the database and REST API endpoints to be consumed
          by the front end.
        </NoteParagraph>
      </Paragraph3>
      <Paragraph3>
        •{" "}
        <Project1
          href="https://main.d2btcjpp4e0k3s.amplifyapp.com/login"
          target="_blank"
        >
          Family Promise: Service Tracker
        </Project1>{" "}
        (5/28/2021){" "}
        <SourceCode
          href="https://github.com/TT41-Build-Week-Water-My-Plants/backend-dartagnan"
          target="_blank"
        >
          SOURCE CODE
        </SourceCode>
        <Br />
        <NoteParagraph>
          ^ Built in a cross-functional Agile development team. I was solely
          responsible for optimizing the website design to be both reactive and
          adaptive to work just as smooth on a tablet as it would a desktop. I
          also refactored the navigation bar code, and helped build out redux
          actions/reducers to properly consume API data for datatables used.
        </NoteParagraph>
      </Paragraph3>
      <Paragraph4>
        •{" "}
        <Project1
          href="https://github.com/dvonpingel/portfolio"
          target="_blank"
        >
          Source Code for This Portfolio
        </Project1>{" "}
        (Updated last 5/29/2021) <Br />
        <NoteParagraph>
          ^ Just in case you wanted to see how I styled this whole website and
          the way I structured my components! Work is all my own and I'm just
          having a lot of fun with it!
        </NoteParagraph>
      </Paragraph4>
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
  margin-bottom: 30px;
  font-size: 2rem;
  border-bottom: 1px solid white;
  width: 225px;
  margin-left: auto;
  margin-right: auto;
`;

const Paragraph = styled.p`
  opacity: 0;
  animation: ${kf} 1s forwards;
  animation-delay: 0.2s;
  color: white;
  font-family: "Cairo", sans-serif;
  font-size: 1.6rem;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.2px;
  word-spacing: 1px;
`;

const Paragraph2 = styled(Paragraph)`
  animation-delay: 0.4s;
  margin: 50px 0;
`;

const Paragraph3 = styled(Paragraph)`
  animation-delay: 0.6s;
  margin: 50px 0;
`;

const Paragraph4 = styled(Paragraph)`
  animation-delay: 0.8s;
  margin: 50px 0;
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

const Br = styled.br`
  display: block;
  content: "";
  margin-top: 0;
`;

export default Projects;
