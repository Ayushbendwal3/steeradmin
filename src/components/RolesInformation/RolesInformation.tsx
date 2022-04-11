import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { rem } from 'polished'
import { StyledPrimaryButton } from '../../pages'
import {
  StyledFormSection,
  StyledSectionContainer,
  StyledSectionWrapper,
} from '../PersonalDetails/PersonalDetails.styled'
import { SectionProps } from '../Stepper/Stepper.types'

const RolesInformation: React.FC<SectionProps> = ({
  setFormStage,
  formStage,
}) => {
  const isDisabled = formStage === 0
  const handlePrev = () => {
    if (formStage === 0) {
      return
    }
    setFormStage((prev) => prev - 1)
  }
  const handleSubmit = () => {
    if (formStage === 3) {
      return
    }
    setFormStage((next) => next + 1)
  }
  return (
    <StyledSectionWrapper>
      <StyledSectionContainer component="form" onSubmit={handleSubmit}>
        <StyledFormSection>
          <Typography>First Name</Typography>
          <TextField required label="First Name" />
        </StyledFormSection>
        <StyledFormSection>
          <Typography>Last Name</Typography>
          <TextField required label="Last Name" />
        </StyledFormSection>
        <StyledFormSection>
          <Typography>Contact Number</Typography>
          <TextField required label="Contact Number" />
        </StyledFormSection>
        <StyledFormSection>
          <Typography>Title</Typography>
          <TextField required label="Title" />
        </StyledFormSection>
        <Box
          display="flex"
          justifyContent="space-evenly"
          marginTop={rem('16px')}
        >
          <StyledPrimaryButton
            variant="contained"
            isDisabled={isDisabled}
            onClick={handlePrev}
          >
            Prev
          </StyledPrimaryButton>
          <StyledPrimaryButton type="submit" variant="contained">
            Next
          </StyledPrimaryButton>
        </Box>
      </StyledSectionContainer>
    </StyledSectionWrapper>
  )
}

export default RolesInformation
