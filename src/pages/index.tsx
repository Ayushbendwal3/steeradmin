import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { rem } from 'polished'

const StyledMainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-top: ${rem('128px')};
`

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${rem('64px')};
  margin-top: ${rem('64px')};
  justify-content: space-evenly;
  box-shadow: 0px 0px 8px 1px #888888;
  width: 50%;
`

const StyledSeparator = styled.div`
  &&& {
    height: 1px;
    background-color: #c6c5c5;
    width: 100%;
    margin-top: ${rem('16px')};
  }
`

export const StyledPrimaryButton = styled(Button)<{ isDisabled?: boolean }>`
  &&& {
    margin: ${rem('16px')};
    background-color: rgb(10, 23, 71, 0.8);

    &:hover {
      background-color: rgb(10, 23, 71);
    }

    ${(p) =>
      p.isDisabled &&
      css`
        pointer-events: none;
        background-color: rgba(191, 167, 167, 0.5);
        color: #000000;
        cursor: not-allowed;
      `}
  }
`

const Home: NextPage = () => {
  return (
    <StyledMainWrapper>
      <Image height="120px" width="600px" alt="logo" src="/logo.png" />
      <StyledMainContainer>
        <TextField
          id="outlined-search"
          label="Search Existing User"
          type="search"
        />
        <StyledSeparator />
        <Link href="/register" passHref>
          <StyledPrimaryButton variant="contained">
            New User
          </StyledPrimaryButton>
        </Link>
      </StyledMainContainer>
    </StyledMainWrapper>
  )
}

export default Home
