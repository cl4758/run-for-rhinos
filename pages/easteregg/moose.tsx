import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const TextWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

function Moose() {
  return (
    <Wrapper>
      <TextWrapper>
        <p>Congrats! You found Moose&apos;s page.</p>
      </TextWrapper>
    </Wrapper>
  )
}

export default Moose;
