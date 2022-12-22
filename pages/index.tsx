import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import rhino from '../public/rhino_rainbow.jpg';
import overlay from '../public/black.jpg';
import running1 from '../public/running1.jpg';

const BackgroundImage = styled(Image)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  box-shadow: 0 0 8px 8px white inset;
`;

const BackImage = styled(Image)`
  /* position: fixed; */
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  box-shadow: 0 0 8px 8px white inset;
`;

const OverlayImage = styled(Image)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  opacity: 30%;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ScrollArea = styled.div`
  height: ${props => props.style ? props.style.height : '87vh'};
  width: 100%;
  /* margin-top: 10vh; */
  background-color: ${props => props.style?.background};
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

`;

const Wrapper = styled.div`
  width: 100%
`;

const StyledLink = styled.a`
  color: white;
`;

const Description = styled.div`
  @media (min-width: 768px) {
    font-size: 3em;
  }
  color: inherit;
  /* align-items: center;
  align-self: center; */
  font-size: 2.85em;
  width: 100%;
  text-align: center;
`;

const Text = styled.div`
  @media (min-width: 768px) {
    font-size: 1.3em;
  }
  margin: 0 auto 0 auto;
  color: ${props => props.style ? props.style.color : 'inherit'};;
  /* align-items: center;
  align-self: center; */
  font-size: 1.3em;
  width: 90%;
  text-align: center;
`;

const TextWrapper = styled.div`
  display: grid;
  margin-left: 10%;
  margin-right: 10%;
  grid-template-columns: 50% 50%;
  &.progress {
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
 
  text-align: center;
  > p {
    margin: 0;
    font-size: 1.1em;
  }

`;

export default function Home() {
  const first_text = "3079 miles, 12 states, 90 days";

  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(first_text.slice(0, text.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <Wrapper>
      <Head>
        <title>Run for Rhinos</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="description" content="Run for Rhinos Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <div> */}
      <ScrollArea className="image">
        <BackgroundImage
          alt="Rhino in front of a rainbow"
          src={rhino}
          placeholder="blur"
          priority={true}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <OverlayImage
          alt="overlay"
          src={overlay}
          placeholder="blur"
          priority={true}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }} />
        {/* </div> */}
        {/* <h1>
          Running across the United States
        </h1> */}

        <DescriptionWrapper>
          <Description>
            {text}
          </Description>
        </DescriptionWrapper>
      </ScrollArea>

      <ScrollArea style={{ height: "50vh" }} className="first">
        <DescriptionWrapper>
          <Text>
            On March 1st, Tim sets out from LA to NYC, covering approximately 3,078 miles over 90 days.
            <br></br>
            <br></br>
            To prepare, on December 17th, Tim will run from NYC to BOS, a journey of 240 miles over 6 days.
          </Text>
        </DescriptionWrapper>
      </ScrollArea>
      <ScrollArea style={{ background: "white", height: "70vh" }}>
        <DescriptionWrapper>
          <TextWrapper className="startend">
            <div>
              <h3 style={{ color: "black" }}>Start:</h3>
              <p style={{ color: "black" }}>
                NYC <br></br>
                12/17/22
              </p>
            </div>
            <div>
              <h3 style={{ color: "black" }}>End:</h3>
              <p style={{ color: "black" }}>
                Boston <br></br>
                12/23/22
              </p>
            </div>
          </TextWrapper>
          <Text style={{ color: "black" }}>
            <h2>NYC to Boston</h2>
            <p style={{ color: "black" }}>
              5 days, 184 miles run<br></br>
              1 day, 50 miles left
            </p>
          </Text>
        </DescriptionWrapper>
      </ScrollArea>
      <ScrollArea style={{ background: "black", height: "30vh" }}>
        <DescriptionWrapper>
          <Text>
            Follow along on&nbsp;
            <StyledLink
              href={'https://www.strava.com/athletes/66674345'}
              target="_blank"
              rel="noopener noreferrer">Strava
            </StyledLink>
            &nbsp;and&nbsp;
            <StyledLink
              href={'https://www.instagram.com/timgoesfar/'}
              target="_blank"
              rel="noopener noreferrer">Instagram
            </StyledLink>
          </Text>
        </DescriptionWrapper>
      </ScrollArea>
      <ScrollArea style={{ background: "white", height: "70vh" }}>
        <DescriptionWrapper>
          <TextWrapper className="startend">
            <div>
              <h3 style={{ color: "black" }}>Start:</h3>
              <p style={{ color: "black" }}>
                LA <br></br>
                3/1/23</p>
            </div>
            <div>
              <h3 style={{ color: "black" }}>End:</h3>
              <p style={{ color: "black" }}>
                NYC <br></br>
                6/1/23
              </p>
            </div>
          </TextWrapper>
          <Text style={{ color: "black" }}>
            <h2>LA to NYC</h2>
            <p>Coming soon...</p>
            {/* <p style={{ color: "black" }}>
              0 days, 0 miles run<br></br>
              90 days, 3078 miles left
            </p> */}
          </Text>
        </DescriptionWrapper>
      </ScrollArea>
    </Wrapper>
  )
}
