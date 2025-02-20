import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

const AboutContainer = styled.section`
  padding: 6rem 5%;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  animation: ${fadeIn} 0.8s ease forwards;
`;

const AboutDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.8;
  font-family: ${({ theme }) => theme.fonts.primary};
  animation: ${fadeIn} 1s ease forwards;
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const TeamMember = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${scaleIn} 0.5s ease forwards;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const MemberImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.primary};
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const AboutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

function About() {
  const ME = [
    {
      id: 1,
      name: 'Ismail AMMAR',
      role: '1337 UM6P Student',
      image: 'https://cdn.intra.42.fr/users/4c490c68863eec57625171f421df24cf/iammar.jpg',
    },
  ];

  return (
    <AboutContainer id="about">
      <AboutTitle>About me</AboutTitle>
      <AboutDescription>
      Hi ,I am Ismail AMMAR, a 1337 UM6P student, and I’ve developed this website that offers free language courses using React.js to deliver an intuitive and engaging experience.
      </AboutDescription>
      <TeamContainer>
        {ME.map((member) => (
          <TeamMember key={member.id}>
            <MemberImage src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </TeamMember>
        ))}
      </TeamContainer>
      <AboutButton onClick={() => window.location.href = 'https://github.com/Is-Ammar'}>My GitHub</AboutButton>

    </AboutContainer>
  );
}

export default About;