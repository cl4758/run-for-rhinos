import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import cat from '../public/cat.jpg';
import { IconBrandStrava, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons';
import { icons } from '../components/layout/Footer';
import bbqChips from '../public/bbqChips.jpg';
import bbqChips2 from '../public/bbqChips2.jpg';
import running from '../public/running.jpg';
import front from '../public/front.jpg';
import pointing from '../public/pointing.jpg';
import eating from '../public/eating.jpg';

const AboutWrapper = styled.div`
  display: grid;
  padding-top: 5vh;
  grid-template-columns: 30% auto;
  justify-items: center;
  margin-left: 1%;
  margin-right: 1%;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 0;
  }
  &.second {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1vh;
  padding-bottom: 3vh;
`;

const Wrapper = styled.div`
  width: 100%
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
`;

const Text = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`;

const ScrollArea = styled.div`
  height: ${props => props.style ? props.style.height : '89vh'};
  @media (max-width: 768px) {
    height: 160vh !important;
  }
  width: 100%;
  /* margin-top: 10vh; */
  background-color: ${props => props.style?.background};
  background-image: ${props => props.style?.backgroundImage};
`;

const Gallery = styled.ul`
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 1em;
  max-height: 100%;
`;

const ImageWrapper = styled.li`
  padding: 1%;
  flex-grow: 1;
  list-style-type: none;
  height: 300px;
  @media (max-width: 768px) {
    max-width: 200px;
  }

`;

const StyledImage = styled(Image)`
  max-height: 100%;
  /* min-width: 100%; */
  object-fit: cover;
  vertical-align: bottom;
  position: static !important;
  /* @media (max-width: 768px) {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  } */
  
`;


const StyledLink = styled.a`
  color: white;
  &.moose {
    color: #f9d47f;
  }
  &.me {
    color: #a8fcbd;
  }
  &.easteregg {
    text-decoration: none;
  }
`;

function About() {

  const mooseLinks = [{ link: 'https://instagram.com/moose.et.al', label: <IconBrandInstagram /> },
  { link: 'https://www.tiktok.com/@christinelai_', label: <IconBrandTiktok /> },];

  const myLinks = [
    { link: 'https://instagram.com/christinelai_', label: <IconBrandInstagram /> },
    { link: 'https://www.strava.com/athletes/35558561', label: <IconBrandStrava /> },
  ]

  const mooseIcons = mooseLinks.map((link) => {
    return (
      <StyledLink
        key={link.link}
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        className="moose"
      >
        {link.label}
      </StyledLink>
    );
  });

  const myIcons = myLinks.map((link) => {
    return (
      <StyledLink
        key={link.link}
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        className="me"
      >
        {link.label}
      </StyledLink>
    );
  });


  return (
    <Wrapper>
      <ScrollArea style={{ height: "89vh" }}>
        <AboutWrapper>
          <PhotoWrapper>
            <Image
              src={bbqChips}
              alt="Picture of Timmy"
              height={400}
            />
          </PhotoWrapper>
          <div>Tim is a level 5 vegan ultra-endurance athlete. He started running in 2020-something (he won&apos;t tell me right now) which
            is fine because he&apos;s preparing for finals.
            <br></br>
            <br></br>
            Anyway, he started running pretty recently, and ran his first marathon in 2020(?) by himself, starting at like 4am on Thanksgiving Day.
            He then signed up for the Dirty German (I think), which is a 50 mile trail race, in 2021.
            <br></br>
            <br></br>
            He finished that, and then did a bunch of other stuff, like the <StyledLink href={'https://fastestknowntime.com/route/central-park-loop-challenge-ny'} target="_blank" rel="noreferrer" color="white">Central Park Loop Challenge</StyledLink> (70+ miles around Central Park, thanks for the inspiration Robbie) and the <StyledLink href={'https://www.keys100.com/'} target="_blank" rel="noreferrer" color="white">Keys 100</StyledLink> in 2022 (a really gorgeous but grueling race down the Florida Keys in Florida humidity and heat).
            <br></br>
            <br></br>
            Since then, he&apos;s been preparing for his run across the US. He also did some other ultra-endurance events, including running a 50 miler on his own to try and beat his official time (he did, finishing in around 10 hours) and dragging my butt through the TARC Fall Classic, my first 50 miler.
            <br></br>
            <br></br>
            In December, Tim is setting off on a 242-mile journey from NYC to Boston, to practice for his Transcon. This mostly includes practicing things like living out of a car, camping, not showering for days, not having access to a bathroom... oh yeah, and also running over 30 miles a day for multiple days in a row.
            <br></br>
            <br></br>
            He currently lives in Brooklyn with his girlfriend, Christine (that&apos;s <StyledLink href={'/easteregg/christine'} className="easteregg">me</StyledLink> 🙋), and adorable rescue dog, <StyledLink href={'/easteregg/moose'} className="easteregg">Moose</StyledLink>.
          </div>
        </AboutWrapper>
      </ScrollArea>
      <ScrollArea style={{ height: "120vh" }}>
        <Gallery>
          <ImageWrapper>
            <StyledImage
              src={front}
              alt="Shot of Tim walking"
              fill
              objectFit="contain"
            />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage
              src={running}
              alt="Tim running"
              fill
              objectFit="contain"
            />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage
              src={eating}
              alt="Tim eating from a bag"
              fill
              objectFit="contain"
            />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage
              src={bbqChips2}
              alt="Tim eating bbq chips leaning against a car"
              fill
              objectFit="contain"
            />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage
              src={pointing}
              alt="Tim pointing at the camera"
              fill
              objectFit="contain"
            />
          </ImageWrapper>
        </Gallery>
      </ScrollArea>
      <ScrollArea style={{ height: '50vh' }}>
        <AboutWrapper className={"second"}>
          <TextWrapper>
            <Text>
              Tim&apos;s socials:&nbsp;&nbsp;{icons}
              <br></br>
              <br></br>
              <StyledLink href={'/easteregg/moose'} className="easteregg">Moose</StyledLink>:&nbsp;&nbsp;{mooseIcons}
              <br></br>
              <br></br>
              <StyledLink href={'/easteregg/christine'} className="easteregg">Me</StyledLink>:&nbsp;&nbsp;{myIcons}
            </Text>
          </TextWrapper>
        </AboutWrapper>
      </ScrollArea>
    </Wrapper>
  );
}

export default About;