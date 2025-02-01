import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import heroIllustration from './images/hero-illustration.svg';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  animation: ${fadeIn} 1s ease forwards;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.lightBackground};
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.medium}, color ${({ theme }) => theme.transitions.medium};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ScrollIndicator = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  animation: ${bounce} 2s infinite;
  cursor: pointer;
`;

function Hero() {
  const heroData = {
    title: 'Learn Languages Effortlessly',
    subtitle: 'Immerse yourself in a new language with interactive lessons and real-world practice.',
    buttonText: 'Get Started',
  };

  return (
    <HeroSection>
      <HeroContent>
        <img src={heroIllustration} alt="Language Learning" style={{ width: '300px', marginBottom: '2rem' }} />
        <HeroTitle>{heroData.title}</HeroTitle>
        <HeroSubtitle>{heroData.subtitle}</HeroSubtitle>
        <HeroButton>{heroData.buttonText}</HeroButton>
        <ScrollIndicator onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          ↓
        </ScrollIndicator>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;