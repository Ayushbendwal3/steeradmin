import Image from 'next/image'
import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Styled404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;
`

const StyledClippath = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 500px;
  background-color: #040a25;
  clip-path: polygon(0 69%, 0% 100%, 100% 100%);
`

const StyledText = styled.h1`
  color: #1192b4;
`

const custom404 = () => {
  return (
    <Styled404Wrapper>
      <Image height="320px" width="1280px" alt="logo" src="/logo.png" />
      <StyledText>Oops! page not found</StyledText>
      <p>
        <Link href="/">Click here to get redirected to Home</Link>
      </p>
      <StyledClippath />
    </Styled404Wrapper>
  )
}

export default custom404
