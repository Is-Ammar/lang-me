import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import DictionaryComponent from './components/api/DictionaryComponent';
import QuoteComponent from './components/api/QuoteComponent';
import BookSearchComponent from './components/api/BookSearchComponent';
import Contact from './components/contact'; 
import About from './components/About';
import styled from 'styled-components';

const ApiSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.xlarge};
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      
      <ApiSection>
        <DictionaryComponent />
        <QuoteComponent />
        <BookSearchComponent />
      </ApiSection>
      
      <About /> {}
      <Contact /> {}
    </div>
  );
}

export default App;