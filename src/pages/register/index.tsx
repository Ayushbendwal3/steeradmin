import React, { useState } from 'react'
import { Box } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { rem } from 'polished'
import ConfirmationSection from '../../components/ConfirmationSection'
import OrganisationDetails from '../../components/OrganisationDetails'
import PersonalDetails from '../../components/PersonalDetails'
import RolesInformation from '../../components/RolesInformation'
import Stepper from '../../components/Stepper'

const steps = [
  'Personal Details',
  'Organisation Details',
  'Roles Information',
  'confirmation',
]

const Register = () => {
  const [formStage, setFormStage] = useState<number>(0)

  return (
    <Box marginTop={rem('100px')}>
      <Stepper initialStage={formStage} steps={steps} />
      {formStage === 0 && (
        <PersonalDetails formStage={formStage} setFormStage={setFormStage} />
      )}
      {formStage === 1 && (
        <OrganisationDetails
          formStage={formStage}
          setFormStage={setFormStage}
        />
      )}
      {formStage === 2 && (
        <RolesInformation formStage={formStage} setFormStage={setFormStage} />
      )}
      {formStage === 3 && (
        <ConfirmationSection
          formStage={formStage}
          setFormStage={setFormStage}
        />
      )}
    </Box>
  )
}

export default observer(Register)
