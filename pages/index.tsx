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
`;

const ScrollArea = styled.div`
  height: ${props => props.style ? props.style.height : '89vh'};
  width: 100%;
  /* margin-top: 10vh; */
  background-color: ${props => props.style?.background};
`;

const Wrapper = styled.div`
width: 100%`;

const Description = styled.div`
  @media (min-width: 768px) {
    font-size: 3em;
    width: 100%;
  }
  padding-top: 30vh;
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
    width: 100%;
  }
  padding-top: 30vh;
  color: inherit;
  /* align-items: center;
  align-self: center; */
  font-size: 1.3em;
  width: 70%;
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
        <meta name="description" content="Run for Rhinos Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
            On March 1st, ( . ) ( . )
          </Text>
        </DescriptionWrapper>
      </ScrollArea>
      <ScrollArea style={{ background: "white", height: "100vh" }}>
        <DescriptionWrapper>
          <Text>
            On March 1st,
          </Text>
        </DescriptionWrapper>
      </ScrollArea>
    </Wrapper>
  )
}
