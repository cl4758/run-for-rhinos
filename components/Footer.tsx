import Link from 'next/link';
import styled from 'styled-components';
import { Wrapper } from './common';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const FooterContent = styled.div`
  padding-right: 5vw;
`;

const Text = styled.p`
font-size: 0.8em;
  > a {
    color: inherit;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Text>
          Raising money for <a href="https://vetpaw.org/" rel="noreferrer" target="_blank">Vetpaw</a>
        </Text>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;