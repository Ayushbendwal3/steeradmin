import React, { useEffect, useState } from 'react'
import {
  EState,
  StepperNodeProps,
  StepProps,
  StepperRadioProps,
} from './Stepper.types'
import {
  StyledProgressBar,
  StyledStepper,
  StyledStepperNodeWrapper,
  StyledStepText,
} from './Stepper.Styled'
import { Box } from '@mui/material'
import Image from 'next/image'

const StepperRadio: React.FC<StepperRadioProps> = ({ state }) => {
  return (
    <>
      {state === EState.active && (
        <Image height="16px" alt="active" width="16px" src="/step-active.svg" />
      )}
      {state === EState.inactive && (
        <Image
          height="16px"
          alt="completed"
          width="16px"
          src="/step-completed.svg"
        />
      )}
      {state === EState.completed && (
        <Image
          height="16px"
          alt="not-completed"
          width="16px"
          src="/step-not-completed.svg"
        />
      )}
    </>
  )
}

const StepperNode: React.FC<StepperNodeProps> = ({ index, stage, step }) => {
  const [nodeState, setNodeState] = useState<EState>(EState.inactive)

  useEffect(() => {
    if (index === stage) setNodeState(EState.active)
    else if (index > stage) setNodeState(EState.completed)
    else setNodeState(EState.inactive)
  }, [stage, index])

  return (
    <StyledStepperNodeWrapper state={nodeState}>
      <StyledProgressBar state={nodeState} />
      <Box display="flex">
        <StepperRadio state={nodeState} />
        <StyledStepText state={nodeState}>{step}</StyledStepText>
      </Box>
    </StyledStepperNodeWrapper>
  )
}

const Stepper: React.FC<StepProps> = ({ steps, initialStage }) => {
  return (
    <StyledStepper>
      {steps.map((step, index) => {
        return (
          <StepperNode
            key={`key-${index}`}
            index={index}
            stage={initialStage}
            step={step}
          />
        )
      })}
    </StyledStepper>
  )
}

export default Stepper
