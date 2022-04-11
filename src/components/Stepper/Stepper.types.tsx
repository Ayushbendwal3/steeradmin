export interface StepProps {
  initialStage: number
  steps: Array<string>
}

export interface StepperNodeProps {
  stage: number
  step: string
  index: number
}

export enum EState {
  active = 'active',
  completed = 'completed',
  inactive = 'inactive',
}

export interface StepperRadioProps {
  state: EState
}

export interface SectionProps {
  formStage: number
  setFormStage: React.Dispatch<React.SetStateAction<number>>
}
