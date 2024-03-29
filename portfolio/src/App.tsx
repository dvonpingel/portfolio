import './App.css'
import React from 'react'
import { Link, Route } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import moment from 'moment'

const App = () => {
  return (
    <>
      <Header>
        <NavBar>
          <Nav to='/'>Home</Nav>
          <Nav to='/about'>About</Nav>
          <Nav to='/projects'>Projects</Nav>
        </NavBar>
      </Header>

      <Route exact path='/'>
        <Home />
        <Footer>
          <Copyright>
            &copy; {moment().format('YYYY')} D'Artagnan von Pingel
          </Copyright>
        </Footer>
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/projects'>
        <Projects />
      </Route>
    </>
  )
}

const Footer = styled.div`
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(11, 23, 37);
`
const Copyright = styled.p`
  font-size: 0.8rem;
  width: 175px;
  margin: 10px auto;
`

const kf = keyframes`
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

const NavBar = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
`

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: #465362;
  box-sizing: border-box;
`

const Nav = styled(Link)`
  opacity: 0;
  animation: ${kf} 1s ease-in-out forwards;
  position: relative;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-family: 'Cairo', sans-serif;
  font-weight: 700;
  transition: 0.4s;
  &:hover {
    color: white;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`

export default App
