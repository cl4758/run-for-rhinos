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

const Description = styled.p`
  color: inherit;
  align-items: center;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export default function Home() {
  const first_text = "3047 miles, 12 states, 90 days";

  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(first_text.slice(0, text.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div>
      <Head>
        <title>Run for Rhinos</title>
        <meta name="description" content="Run for Rhinos Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ViewSource pathname="pages/background.tsx" /> */}
      <div>
        <BackgroundImage
          alt="Rhino in front of a rainbow"
          src={rhino}
          placeholder="blur"
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
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }} />
      </div>
      {/* <h1>
          Running across the United States
        </h1> */}

      <div>
        <Description>
          {text}
        </Description>
      </div>
    </div >
  )
}
