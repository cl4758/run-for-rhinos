import Link from 'next/link';
import styled from 'styled-components';
import { IconBrandStrava, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons';

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  justify-self: flex-end;
  align-items: center;
  width: 30%;
`;

const Text = styled.p`
  display: flex;
  justify-self: center;
  align-items: center;
  font-size: 0.7em;
  white-space: pre-wrap;
  > a {
    color: inherit;
  }
`;
const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  & ${Text} {
    grid-column: 2;
  }
  & ${IconWrapper} {
    grid-column: 3;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;



function Footer() {
  const links = [{ link: 'https://instagram.com/timgoesfar', label: <IconBrandInstagram /> },
  { link: 'https://www.tiktok.com/@timdoeseverything', label: <IconBrandTiktok /> },
  { link: 'https://www.strava.com/athletes/66674345', label: <IconBrandStrava /> }];

  const icons = links.map((link) => {
    return (
      <a
        key={link.link}
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </a>
    );
  });

  return (
    <FooterWrapper>
      <Text>
        Raising money for <a href="https://vetpaw.org/" rel="noreferrer" target="_blank">Vetpaw</a>
      </Text>
      <IconWrapper>
        {icons}
      </IconWrapper>
    </FooterWrapper>
  );
}

export default Footer;