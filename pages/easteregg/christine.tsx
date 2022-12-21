import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const TextWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const StyledLink = styled.a`
  color: white;
  &.easteregg {
    text-decoration: none;
  }
`;

function Christine() {
  return (
    <Wrapper>
      <TextWrapper>
        <p>Congrats! You also found my page. <StyledLink href={'/easteregg/moose'} className="easteregg">Moose</StyledLink>&apos;s page is cuter, so if you&apos;re looking for that...
        </p>
        <br></br>
        <br></br>
        Moose was a lonely stray dog from Puerto Rico when I adopted him on 3/14/21, and similarly, Timmy was also a lonely stray when I adopted him on 2/1/22. Just kidding I didn&apos;t adopt either of them, I gave birth to Moose and kidnapped Timmy.
      </TextWrapper>
    </Wrapper>
  )
}

export default Christine;
