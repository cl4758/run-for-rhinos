import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import cat from '../public/cat.jpg';
import { IconBrandStrava, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons';
import { icons } from '../components/layout/Footer';


const AboutWrapper = styled.div`
  display: grid;
  padding-top: 5vh;
  grid-template-columns: 25% auto;
  margin: auto;
  width: 90%;
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
  width: 100%;
  /* margin-top: 10vh; */
  background-color: ${props => props.style?.background};
  background-image: ${props => props.style?.backgroundImage};
`;

const StyledLink = styled.a`
  color: white;
  &.moose {
    color: #f9d47f;
  }
  &.me {
    color: #a8fcbd;
  }
`;

function About() {

  const mooseLinks = [{ link: 'https://instagram.com/moose.et.al', label: <IconBrandInstagram /> },
  { link: 'https://www.tiktok.com/@christinelai_', label: <IconBrandTiktok /> },
  { link: 'https://www.strava.com/athletes/66674345', label: <IconBrandStrava /> }];

  const myLinks = [
    { link: 'https://instagram.com/christinelai_', label: <IconBrandInstagram /> },
    { link: 'https://www.strava.com/athletes/35558561', label: <IconBrandStrava /> }
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
              src={cat}
              alt="Picture of Timmy"
              width={200}
              height={200}
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
            He currently lives in Brooklyn with his girlfriend, Christine (that&apos;s me 🙋), and adorable rescue dog, Moose.
          </div>
        </AboutWrapper>
      </ScrollArea>
      <ScrollArea style={{ backgroundImage: "url(https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149162009.jpg?w=1800&t=st=1670798087~exp=1670798687~hmac=cca3e72bec9e95f8774c430d95560d568c1bb242b3de3b63cf0226dbbd8794e7)", height: "50vh" }}>
        <TextWrapper>
          <Text>

          </Text>
        </TextWrapper>
      </ScrollArea>
      <ScrollArea style={{ height: '50vh' }}>
        <AboutWrapper className={"second"}>
          <TextWrapper>
            <Text>
              Tim&apos;s socials:&nbsp;&nbsp;{icons}
              <br></br>
              <br></br>
              Moose:&nbsp;&nbsp;{mooseIcons}
              <br></br>
              <br></br>
              Me:&nbsp;&nbsp;{myIcons}
            </Text>
          </TextWrapper>
        </AboutWrapper>
      </ScrollArea>
    </Wrapper>
  );
}

export default About;