import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
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

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkCaret = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  position: relative;
  filter: ${({ blur }) => (blur ? 'blur(5px)' : 'none')};
  transition: filter 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  animation: ${fadeIn} 1s ease forwards;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.15em solid ${({ theme }) => theme.colors.white};
  animation: ${typing} 4s, ${blinkCaret} 0.75s step-end infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.lightBackground};
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.6;
  opacity: 0;
  animation: ${fadeIn} 1s ease 3.5s forwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const ScrollIndicator = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  animation: ${bounce} 2s infinite;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease forwards;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightBackground};
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

const FormButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.medium};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const expandAnimation = keyframes`
  from {
    height: 300px;
  }
  to {
    height: 450px;
  }
`;

const FormWrapper = styled.div`
  animation: ${({ isExpanded }) => (isExpanded ? expandAnimation : 'none')} 0.5s ease forwards;
`;

function Hero() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const heroData = {
    title: 'Learn Languages Effortlessly',
    subtitle: 'Immerse yourself in a new language with interactive lessons and real-world practice.',
    buttonText: 'Get Started',
  };

  const handleGetStartedClick = () => {
    setShowLogin(true);
  };

  const handleLogin = () => {
    alert('Login functionality coming soon!');
  };

  const handleSignUp = () => {
    alert('Sign up functionality coming soon!');
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
    setIsLogin(true);
    setIsExpanded(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <HeroSection blur={showLogin}>
        <HeroContent>
          <img src={heroIllustration} alt="Language Learning" style={{ width: '100%', maxWidth: '300px', marginBottom: '2rem' }} />
          <HeroTitle>{heroData.title}</HeroTitle>
          <HeroSubtitle>{heroData.subtitle}</HeroSubtitle>
          <HeroButton onClick={handleGetStartedClick}>{heroData.buttonText}</HeroButton>
          <ScrollIndicator onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            ↓
          </ScrollIndicator>
        </HeroContent>
      </HeroSection>
      {showLogin && (
        <ModalOverlay>
          <FormWrapper isExpanded={isExpanded}>
            <FormContainer>
              <CloseButton onClick={handleCloseLogin}>×</CloseButton>
              <FormTitle>{isLogin ? 'Login' : 'Create Account'}</FormTitle>
              <FormInput type="text" placeholder="Username" />
              <FormInput type="password" placeholder="Password" />
              {!isLogin && <FormInput type="email" placeholder="Email" />}
              <FormButton onClick={isLogin ? handleLogin : handleSignUp}>
                {isLogin ? 'Login' : 'Sign Up'}
              </FormButton>
              <ToggleButton onClick={toggleForm}>
                {isLogin ? 'Create an account' : 'Already have an account? Login'}
              </ToggleButton>
            </FormContainer>
          </FormWrapper>
        </ModalOverlay>
      )}
    </>
  );
}

export default Hero;