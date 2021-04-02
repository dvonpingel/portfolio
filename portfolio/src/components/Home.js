import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <MainContent>
      <Title>
        hello! i'm <Br />
        <Bigger>D'Artagnan von Pingel</Bigger>
      </Title>
      <SecondaryNav>
        <NavContainer>
          <Nav to="/about">About</Nav>
          <Nav to="/projects">Projects</Nav>
        </NavContainer>
      </SecondaryNav>
      <LogoDiv>
        <Logo href="https://github.com/dvonpingel" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Logo>
        <LinkedLogo
          href="https://www.linkedin.com/in/dartagnan-von-pingel/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </LinkedLogo>
        <Logo
          href="https://www.facebook.com/dartagnan.vonpingel"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </Logo>
      </LogoDiv>
    </MainContent>
  );
};

const MainContent = styled.div`
  /* width: 100%;
  height: 80vh; */
`;

const kf = keyframes`
    100% {
        opacity: 1;
        transform: scale(1);
        transform: translate(0);
    }
`;

const Title = styled.h1`
  opacity: 0;
  transform: scale(0.85);
  transform: translate(0, -40px);
  position: relative;
  animation: ${kf} 1s forwards;
  color: white;
  text-align: center;
  margin: 250px 0 0 0;
  font-size: 1.8rem;
  font-family: "Cairo", sans-serif;
`;

const Bigger = styled.span`
  font-size: 3.4rem;
`;

const Br = styled.br`
  display: block;
  content: "";
  margin-top: -45px;
`;

const NavContainer = styled.div`
  opacity: 0;
  transform: scale(0.9);
  animation: ${kf} 1s ease-in-out forwards;
  animation-delay: 0.4s;
  background-color: #ed254e;
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SecondaryNav = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  width: 250px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Nav = styled(Link)`
  opacity: 0;
  animation: ${kf} 1s forwards;
  animation-delay: 0.4s;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: "Cairo", sans-serif;
  font-weight: 700;
  transition: 0.4s;
  color: white;
  box-sizing: border-box;
  &:hover {
    color: #172331;
    transition: 0.2s;
  }
`;

const LogoDiv = styled.div`
  opacity: 0;
  animation: ${kf} 1s forwards;
  animation-delay: 0.8s;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  margin: 20px auto 0 auto;
`;

const Logo = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: 0.4s;
  &:hover {
    transition: 0.3s;
    transform: scale(1.5);
  }
`;

const LinkedLogo = styled(Logo)`
  font-size: 1.6rem;
`;

export default Home;
