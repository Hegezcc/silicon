/// <reference types="react" />
import { Abbreviation } from './abbreviation';
import { ButtonProps, WithCSSAttributes } from './props';
import { SpinnerSize } from './spinner';
export declare type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export declare type ButtonSize = 'unset' | 'sm' | 'md' | 'lg' | '1/2' | 'full';
interface CustomButtonProps extends WithCSSAttributes<ButtonProps> {
    variant?: ButtonVariants;
    children?: React.ReactNode;
    text?: string;
    size?: ButtonSize;
    _hover?: React.CSSProperties & Abbreviation;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loading?: boolean;
    spinnerSize?: SpinnerSize;
}
declare type CustomButtonPropsWithAbbreviation = CustomButtonProps & Abbreviation;
export interface SiliconButtonProps extends CustomButtonPropsWithAbbreviation {
}
export {};
