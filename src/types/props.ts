import React, { ButtonHTMLAttributes, InputHTMLAttributes, DetailedHTMLProps } from 'react'
import { Abbreviation } from './abbreviation'
export type WithCSSAttributes<T> = React.CSSProperties & T

export type ScreenSize = 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2'
export type CSSWithSorthand = React.CSSProperties & Abbreviation
export type Responsive = Partial<Record<ScreenSize, CSSWithSorthand>>

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type DivProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
