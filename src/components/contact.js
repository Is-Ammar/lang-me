import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ContactContainer = styled.section`
  padding: 4rem 5%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  position: relative;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: border-color ${({ theme }) => theme.transitions.medium};

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  resize: vertical;
  min-height: 150px;
  transition: border-color ${({ theme }) => theme.transitions.medium};

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.medium};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SuccessMessage = styled.div`
  position: fixed;
  top: 20px; 
  left: 37%;
  transform: translateX(-60%); 
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  animation: ${slideIn} 0.5s ease forwards, ${fadeOut} 0.5s ease 2.5s forwards;
  z-index: 1000;
`;


function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formspreeEndpoint = 'https://formspree.io/f/mkgoblpz';

    const formData = new FormData(e.target);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();

        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact me</ContactTitle>
      <ContactDescription>
        Have questions or want to get in touch? Send me a message and I'll respond as soon as possible.
      </ContactDescription>
      <ContactForm onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>

      {}
      {isSuccess && <SuccessMessage>Thank you for your message! I will get back to you soon.</SuccessMessage>}
    </ContactContainer>
  );
}

export default Contact;