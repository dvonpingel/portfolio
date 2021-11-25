import React from "react";
import styled, { keyframes } from "styled-components";
import Project from "./Project";

const projectList = [
  {
    title: "Anywhere Fitness Website",
    date: "(3/5/2021)",
    srcHref: "https://github.com/BuildWeekAnywhereFitness/Front-End",
    projectHref: "https://front-end-gamma-two.vercel.app/",
    explanation:
      "^ Built in an Agile team of front-end and back-end developers. I was in charge of the 'client' route of the website front end, including styling, creating onboard screens and routing.",
    delay: "0.2s",
  },
  {
    title: "Water My Plants Website",
    date: "(4/2/2021)",
    srcHref:
      "https://github.com/TT41-Build-Week-Water-My-Plants/backend-dartagnan",
    projectHref: "https://front-end-bice-phi.vercel.app/",
    explanation:
      "^ Built in an Agile development team. I was in charge of the entire backend, creating the database and REST API endpoints to be consumed by the front end.",
    delay: "0.4s",
  },
  {
    title: "Family Promise: Service Tracker",
    date: "(5/28/2021)",
    srcHref:
      "https://github.com/Lambda-School-Labs/family-promise-service-tracker-fe-a",
    projectHref: "https://a.familypromiseservicetracker.dev/login",
    explanation:
      "^ Built in a cross-functional Agile development team. I was solely responsible for optimizing the website design to be both reactive and adaptive to work just as smooth on a tablet as it would a desktop. I also refactored the navigation bar code, and helped build out redux actions/reducers to properly consume API data for datatables used.",
    delay: "0.6s",
  },
  {
    title: "Shelf",
    date: "(6/28/21 - Current)",
    projectHref: "https://www.useshelf.com/",
    delay: "0.8s",
    explanation: (
      <div>
        A website at{" "}
        <a
          href="https://pattern.com/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#ee2f56" }}
        >
          Pattern
        </a>{" "}
        for Ecommerce Logistics and Fulfillment for warehouses across the globe.
        Utilizes the most up to date TypeScript and React best-practices.
      </div>
    ),
  },
  {
    title: "Source Code for This Portfolio",
    date: "(Updated last 11/24/2021)",
    srcHref: "https://github.com/dvonpingel/portfolio",
    delay: "1s",
    explanation:
      "^ Just in case you wanted to see how I styled this whole website and the way I structured my components! Work is all my own and I'm just having a lot of fun with it!",
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <Title>MY PROJECTS</Title>
      {projectList.map((project) => (
        <Project
          title={project.title}
          date={project.date}
          srcHref={project.srcHref}
          projectHref={project.projectHref}
          delay={project.delay}
          explanation={project.explanation}
        />
      ))}
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

export default Projects;
