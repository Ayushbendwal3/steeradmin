import React, { useState } from 'react'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { rem } from 'polished'
import { StyledPrimaryButton } from '../../pages'
import {
  StyledFormSection,
  StyledSectionContainer,
  StyledSectionWrapper,
} from '../PersonalDetails/PersonalDetails.styled'
import { SectionProps } from '../Stepper/Stepper.types'

const organisationList = [
  'Organisation 1',
  'Organisation 2',
  'Organisation 3',
  'Organisation 4',
  'Organisation 5',
]

const OrganisationDetails: React.FC<SectionProps> = ({
  setFormStage,
  formStage,
}) => {
  const isDisabled = formStage === 0
  const [organisationName, setOrganisationName] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setOrganisationName(event.target.value as string)
  }
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
          <Typography>Organisation Name</Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              placeholder="Select Organisation Name"
              onChange={handleChange}
            >
              {organisationList.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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

export default OrganisationDetails
