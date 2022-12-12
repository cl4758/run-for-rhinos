import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import rhino from '../public/rhino_rainbow.jpg';
import overlay from '../public/black.jpg';

const BackgroundImage = styled(Image)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
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
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ScrollArea = styled.div`
  height: ${props => props.style ? props.style.height : '89vh'};
  width: 100%;
  /* margin-top: 10vh; */
  background-color: ${props => props.style?.background};
`;

const Wrapper = styled.div`
  width: 100%
`;

const Description = styled.div`
  @media (min-width: 768px) {
    font-size: 3em;
    width: 100%;
  }
  padding-top: 15%;
  color: inherit;
  /* align-items: center;
  align-self: center; */
  font-size: 2.85em;
  width: 70%;
  text-align: center;
`;

const Text = styled.div`
  @media (min-width: 768px) {
    font-size: 1.3em;
    width: 80%;
  }
  margin-top: 15%;
  color: ${props => props.style ? props.style.color : 'inherit'};;
  /* align-items: center;
  align-self: center; */
  font-size: 1.3em;
  width: 80%;
  text-align: center;
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
      <ScrollArea>
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

      <ScrollArea style={{ background: "black", height: "70vh" }}>
        <DescriptionWrapper>
          <Text>
            On March 1st, Tim sets out from LA to NYC, covering approximately 3,078 miles over 90 days.
            <br></br>
            <br></br>
            To prepare, on December 17th, Tim will run from NYC to BOS, a journey of 242 miles over 7 days.
          </Text>
        </DescriptionWrapper>
      </ScrollArea>
      <ScrollArea style={{ background: "white", height: "50vh" }}>
        <DescriptionWrapper>
          <Text style={{ color: "black" }}>
            If you&apos;re here, thank you for following along! You can track Tim&apos;s progress on the Tracking page or read more on the About page. Please donate!
          </Text>
        </DescriptionWrapper>
      </ScrollArea>
    </Wrapper>
  )
}
