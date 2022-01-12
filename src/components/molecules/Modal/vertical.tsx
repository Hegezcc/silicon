import React, { FC } from 'react'
import styled from 'styled-components'
import { SiliconModalProps } from 'types/modal'
import {
  CloseIcon,
  StyledModal,
  StyledModalBody,
  StyledModalButton,
  StyledModalTitle,
} from './styles'
import { MODAL_TYPES_VERTICAL } from './types'

export const StyledModalVertical = styled(StyledModal)((props: React.CSSProperties) => ({
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  justifyContent: 'center',
  ...props,
}))

const StyledContent = styled.div((props: React.CSSProperties) => ({
  marginTop: '32px',
  ...props,
}))

export const ModalVertical: FC<SiliconModalProps> = ({
  withCloseIcon = true,
  type = 'success',
  image,
  title,
  body,
  show,
  onClose,
  primaryButton,
  secondaryButton,
  children,
  ...props
}) => {
  let showStyles = { display: 'flex' }
  if (!show) {
    showStyles = { display: 'none' }
  }

  let childrenStyles = {}

  if (children)
    childrenStyles = {
      width: 'fit-content',
      maxWidth: 'none',
    }

  let hasButton = false
  if (primaryButton || secondaryButton) {
    hasButton = true
  }

  const buttonElement = (
    <StyledModalButton>
      {secondaryButton}
      {primaryButton}
    </StyledModalButton>
  )

  return (
    <StyledModalVertical {...props} {...showStyles} {...childrenStyles}>
      {children ? (
        <>
          {withCloseIcon && <CloseIcon onClick={onClose} />}
          {children}
        </>
      ) : (
        <>
          {withCloseIcon && <CloseIcon onClick={onClose} />}
          {image ? image : MODAL_TYPES_VERTICAL[type]}
          <StyledContent>
            {title && <StyledModalTitle>{title}</StyledModalTitle>}
            {body && <StyledModalBody>{body}</StyledModalBody>}
          </StyledContent>
          {hasButton && buttonElement}
        </>
      )}
    </StyledModalVertical>
  )
}
