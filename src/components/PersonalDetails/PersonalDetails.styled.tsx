import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { rem } from 'polished'

export const StyledSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: ${rem('32px')} 0;
`

export const StyledSectionContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 15px 2px gray;
  min-width: ${rem('640px')};
  border-radius: ${rem('10px')};
  padding: ${rem('48px')};
`

export const StyledFormSection = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${rem('10px')} 0;
  width: 80%;
`
