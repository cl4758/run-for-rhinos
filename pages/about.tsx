import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  margin-top: 5vh;
  grid-template-columns: 1fr 1fr;
  width: 80%;
`;

const PhotoWrapper = styled.div`
width: 100%`;


function About() {


  return (
    <Wrapper>
      <PhotoWrapper>photo</PhotoWrapper>
      <div>blurb</div>
    </Wrapper>
  );
}

export default About;