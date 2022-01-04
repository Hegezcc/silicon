import { Abbreviation } from 'types/abbreviation';
import { ButtonProps, WithCSSAttributes } from './props';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonSize = 'unset' | 'sm' | 'md' | 'lg' | '1/2' | 'full';

interface CustomButtonProps extends WithCSSAttributes<ButtonProps> {
  variant?: ButtonVariants;
  children?: React.ReactNode;
  text?: string;
  size?: ButtonSize;
  _hover?: React.CSSProperties & Abbreviation;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

type CustomButtonPropsWithAbbreviation = CustomButtonProps & Abbreviation;

export interface SiliconButtonProps extends CustomButtonPropsWithAbbreviation {}
