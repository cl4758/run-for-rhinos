import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const TextWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { params } = router.query

  return (
    <Wrapper>
      <TextWrapper>
        <p>It looks like you were looking for &quot;{params}&quot; - that doesn&apos;t exist, sorry.
          <br></br>
          (If you think it should, shoot me a message.)
        </p>
      </TextWrapper>
    </Wrapper>
  )
}

export default Post
