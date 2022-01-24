import { Abbreviation } from '../abbreviation'
import { InputProps, WithCSSAttributes } from '../props'

export type SearchInputSize = 'unset' | 'sm' | 'md' | 'lg' | '1/2' | 'full'

export interface CustomSearchInput extends Omit<WithCSSAttributes<InputProps>, 'css'> {
  children?: React.ReactNode
  withIcon?: boolean
  center?: boolean
  placeholder?: string
  pesan?: string
  inputSize?: SearchInputSize
  fontSize?: number
}

export type SiliconSearchInput = CustomSearchInput & Abbreviation
