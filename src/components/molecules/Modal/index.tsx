import React, { FC } from 'react'
import { SiliconModalProps } from 'types/modal'
import { ModalHorizontal } from './horizontal'
import { StyledModalOverlay } from './styles'
import { ModalVertical } from './vertical'

export const Modal: FC<SiliconModalProps> = ({
  withOverlay = true,
  onClose,
  show,
  mode = 'vertical',
  ...props
}) => {
  if (!show) return null
  return (
    <>
      {withOverlay && show && <StyledModalOverlay onClick={onClose} />}
      {mode === 'vertical' ? (
        <ModalVertical {...props} onClose={onClose} show={show} />
      ) : (
        <ModalHorizontal {...props} onClose={onClose} show={show} />
      )}
    </>
  )
}
