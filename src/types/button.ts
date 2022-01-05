import { Abbreviation } from 'types/abbreviation'
import { ButtonProps, WithCSSAttributes } from './props'
import { SpinnerSize } from './spinner'

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'ghost'
export type ButtonSize = 'unset' | 'sm' | 'md' | 'lg' | '1/2' | 'full'

interface CustomButtonProps extends Omit<WithCSSAttributes<ButtonProps>, 'css'> {
  variant?: ButtonVariants
  children?: React.ReactNode
  text?: string
  size?: ButtonSize
  _hover?: React.CSSProperties & Abbreviation
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
  spinnerSize?: SpinnerSize
}

export type SiliconButtonProps = CustomButtonProps & Abbreviation
