import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  position: fixed;
  width: 100%;
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease forwards;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    padding: 1rem 0;
  }

  li {
    margin-left: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin: 1rem 0;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-family: ${({ theme }) => theme.fonts.primary};
    transition: color ${({ theme }) => theme.transitions.medium};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 4px 0;
    transition: transform ${({ theme }) => theme.transitions.medium}, opacity ${({ theme }) => theme.transitions.medium};
  }

  &.open div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToCourse = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const scrollPosition = totalHeight * 0.25; 
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
    setIsOpen(false); 
  }
  const scrollToTop = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const scrollPosition = 0; 
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
    setIsOpen(false); 
  }
  
  return (
    <NavContainer>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Lang-me
      </Logo>
      <Hamburger
        onClick={toggleMenu}
        className={isOpen ? 'open' : ''}
        aria-label="Toggle menu"
      >
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <NavLinks isOpen={isOpen}>
      <li><a href ="#Home" onClick={scrollToTop}>Home</a></li>
      <li><a href ="#Course" onClick={scrollToCourse}>Courses</a></li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </NavLinks>
    </NavContainer>
  );
}

export default Navbar;