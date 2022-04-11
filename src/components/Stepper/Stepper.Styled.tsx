import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { rem } from 'polished'
import { EState } from './Stepper.types'

export const StyledStepper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 ${rem('320px')};
`
export const StyledStepperNodeWrapper = styled.div<{ state: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${rem('10px')} 0 ${rem('10px')} ${rem('10px')};
  width: 100%;
`

export const StyledStepText = styled.p<{ state: EState }>`
  font-size: ${rem('16px')};
  font-weight: 500;
  line-height: ${rem('20px')};
  margin-left: ${rem('4px')};
`
export const StyledProgressBar = styled.div<{ state: EState }>`
  height: ${rem('4px')};
  border-radius: ${rem('100px')};
  margin-bottom: ${rem('8.5px')};
  ${(p) =>
    p.state === EState.active &&
    css`
      background-color: #5469d4;
    `}
  ${(p) =>
    p.state === EState.completed &&
    css`
      background-color: #c1c9d2;
    `}
  ${(p) =>
    p.state === EState.inactive &&
    css`
      background-color: #6b7280;
    `}
`
