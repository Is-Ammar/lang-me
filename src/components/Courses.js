import React, { useState } from 'react';
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

const overlayFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CoursesSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 5%;
  flex-wrap: wrap;
  background-color: #f9f9f9;
  transition: filter 0.3s ease;
  filter: ${({ isModalOpen }) => (isModalOpen ? 'blur(5px)' : 'none')};
`;

const CourseCard = styled.div`
  background: #fff;
  width: 100%;
  max-width: 400px; /* Increased max-width */
  padding: 3rem; /* Increased padding */
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.8s ease forwards;
  opacity: 0;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.8rem; /* Increased font size */
  }

  p {
    color: #34495e;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    font-size: 1.2rem; /* Increased font size */
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
  animation: ${overlayFadeIn} 0.3s ease;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease;

  h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 2rem;
  }

  p {
    color: #34495e;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  button {
    background: #ff7675;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-right: 1rem;

    &:hover {
      background: #e84393;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  a {
    text-decoration: none;
  }
`;

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'French',
      description: 'Learn French for Beginners',
      details: 'Start your journey to mastering French with this comprehensive beginner\'s course. Learn essential vocabulary, grammar, and conversational skills in a fun and interactive way.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D889378&action=signup&mode=marketplace-signup',
    },
    {
      id: 2,
      title: 'Spanish',
      description: 'Learn Spanish for Beginners',
      details: 'Discover the beauty of the Spanish language with this beginner-friendly course. Master basic grammar, vocabulary, and conversational phrases.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D673736&action=signup&mode=marketplace-signup',
    },
    {
      id: 3,
      title: 'Dutch',
      description: 'Learn Dutch for Beginners',
      details: 'Explore the Dutch language and culture with this beginner\'s course. Learn essential phrases, grammar, and pronunciation.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D2473346&action=signup&mode=marketplace-signup',
    },
    {
      id: 4,
      title: 'Arabic',
      description: 'Learn Arabic for Beginners',
      details: 'Dive into the rich Arabic language and culture with this beginner\'s course. Learn the alphabet, basic grammar, and essential phrases.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D123456&action=signup&mode=marketplace-signup', 
    },
    {
      id: 5,
      title: 'Japanese',
      description: 'Learn Japanese for Beginners',
      details: 'Embark on your journey to learn Japanese with this beginner-friendly course. Master hiragana, katakana, basic grammar, and useful phrases.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D654321&action=signup&mode=marketplace-signup', 
    },
    {
      id: 6,
      title: 'Chinese',
      description: 'Learn Chinese for Beginners',
      details: 'Start learning Mandarin Chinese with this comprehensive beginner\'s course. Focus on pronunciation, basic characters, and conversational skills.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D987654&action=signup&mode=marketplace-signup', 
    },
    {
      id: 7,
      title: 'Swahili',
      description: 'Learn Swahili for Beginners',
      details: 'Explore the Swahili language and East African culture with this beginner\'s course. Learn basic grammar, vocabulary, and conversational phrases.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D112233&action=signup&mode=marketplace-signup', 
    },
    {
      id: 8,
      title: 'Hindi',
      description: 'Learn Hindi for Beginners',
      details: 'Discover the Hindi language and Indian culture with this beginner-friendly course. Learn the Devanagari script, basic grammar, and essential phrases.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D445566&action=signup&mode=marketplace-signup', 
    },
    {
      id: 9,
      title: 'German',
      description: 'Learn German for Beginners',
      details: 'Start learning German with this beginner-friendly course. Focus on grammar, vocabulary, and conversational skills.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D334455&action=signup&mode=marketplace-signup', 
    },
    {
      id: 10,
      title: 'Italian',
      description: 'Learn Italian for Beginners',
      details: 'Discover the Italian language and culture with this beginner\'s course. Learn essential phrases, grammar, and pronunciation.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D667788&action=signup&mode=marketplace-signup', 
    },
    {
      id: 11,
      title: 'Portuguese',
      description: 'Learn Portuguese for Beginners',
      details: 'Explore the Portuguese language with this beginner-friendly course. Master basic grammar, vocabulary, and conversational phrases.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D990011&action=signup&mode=marketplace-signup', 
    },
    {
      id: 12,
      title: 'Russian',
      description: 'Learn Russian for Beginners',
      details: 'Start your journey to learn Russian with this comprehensive beginner\'s course. Focus on the Cyrillic alphabet, grammar, and essential phrases.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D223344&action=signup&mode=marketplace-signup', 
    },
    {
      id: 13,
      title: 'Korean',
      description: 'Learn Korean for Beginners',
      details: 'Embark on your journey to learn Korean with this beginner-friendly course. Master Hangul, basic grammar, and useful phrases.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D556677&action=signup&mode=marketplace-signup', 
    },
    {
      id: 14,
      title: 'Turkish',
      description: 'Learn Turkish for Beginners',
      details: 'Discover the Turkish language and culture with this beginner\'s course. Learn basic grammar, vocabulary, and conversational phrases.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D889900&action=signup&mode=marketplace-signup', 
    },
    {
      id: 15,
      title: 'Polish',
      description: 'Learn Polish for Beginners',
      details: 'Start learning Polish with this beginner-friendly course. Focus on grammar, vocabulary, and conversational skills.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D112233&action=signup&mode=marketplace-signup', 
    },
    {
      id: 16,
      title: 'Vietnamese',
      description: 'Learn Vietnamese for Beginners',
      details: 'Explore the Vietnamese language and culture with this beginner\'s course. Learn essential phrases, grammar, and pronunciation.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D445566&action=signup&mode=marketplace-signup', 
    },
    {
      id: 17,
      title: 'Thai',
      description: 'Learn Thai for Beginners',
      details: 'Start your journey to learn Thai with this comprehensive beginner\'s course. Focus on the Thai script, grammar, and essential phrases.',
      udemyLink: 'https://www.udemy.com/join/passwordless-auth/?next=%2Fcourse%2Fsubscribe%2F%3FcourseId%3D778899&action=signup&mode=marketplace-signup', 
    },
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <CoursesSection isModalOpen={isModalOpen}>
        {courses.map((course, index) => (
          <CourseCard key={course.id} onClick={() => handleCourseClick(course)} style={{ animationDelay: `${index * 0.2}s` }}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </CourseCard>
        ))}
      </CoursesSection>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.details}</p>
            <div>
              <a href={selectedCourse.udemyLink} target="_blank" rel="noopener noreferrer">
                <button>Enroll for Free</button>
              </a>
              <button onClick={closeModal}>Close</button>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default Courses;