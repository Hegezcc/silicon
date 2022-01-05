import styled, { keyframes } from 'styled-components'
import { StyledSpinnerProps } from 'types/spinner'

const spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
`

const Spinner = styled.div((props: StyledSpinnerProps) => ({
  borderRadius: '50%',
  ...props,
}))

export const StyledSpinner = styled(Spinner)`
  animation: ${spin} 0.8s ease-in-out infinite;
`
