import { Abbreviation } from 'types/abbreviation'
import { WithCSSAttributes, DivProps, Responsive } from './props'
import { ReactNode } from 'react'

type ModalType = 'success' | 'warning' | 'danger'
type ModalMode = 'vertical' | 'horizontal'

interface CustomModalProps extends Omit<WithCSSAttributes<DivProps>, 'css' | 'ref'> {
  children?: React.ReactNode
  withCloseIcon?: boolean
  withOverlay?: boolean
  primaryButton?: ReactNode
  secondaryButton?: ReactNode
  image?: Element | ReactNode
  mode?: ModalMode
  type?: ModalType
  title?: string
  body?: string
  show: boolean
  onClose: () => unknown
  _responsive?: Responsive
}

export type SiliconModalProps = CustomModalProps & Abbreviation
