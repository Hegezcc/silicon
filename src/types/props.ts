import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
export type WithCSSAttributes<T> = React.CSSProperties & T

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type DivProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
