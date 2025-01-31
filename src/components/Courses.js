import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

// Define a fadeIn animation
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

const CoursesSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 5%;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.background};
`;

const CourseCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 300px;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin: 1rem;
  transition: transform ${({ theme }) => theme.transitions.medium}, box-shadow ${({ theme }) => theme.transitions.medium};
  animation: ${fadeIn} 0.8s ease forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.6;
  }

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

function Courses() {
  const courseData = [
    { title: 'Spanish', description: 'Beginner to Advanced Courses' },
    { title: 'French', description: 'Comprehensive Language Program' },
    { title: 'Mandarin', description: 'Immersive Learning Experience' }
  ];

  return (
    <CoursesSection>
      {courseData.map((course, index) => (
        <CourseCard key={index}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </CourseCard>
      ))}
    </CoursesSection>
  );
}

export default Courses;