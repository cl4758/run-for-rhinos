import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 50vh;
  box-sizing: border-box;
  & .full-width {
    grid-column: span 2;
  }
  & .submit-button {
    grid-column: 2;
    justify-content: flex-end;
  }
`;

const FormGroup = styled.div`
  > input, textarea {
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 0.3rem;
  }
  > textarea {
    min-height: 10rem;
  }
  > button {
    float:right;
    font-size: inherit;
  }
`;

function About() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log("form submitted");
  }

  return (
    <Wrapper>
      If I have a lot of text here even more text here
    </Wrapper>
  );
}

export default About;