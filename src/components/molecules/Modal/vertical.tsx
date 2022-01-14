import React, { FC } from 'react'
import styled from 'styled-components'
import { SiliconModalProps } from 'types/modal'
import { responsive } from 'utils/responsive'
import { CloseIcon, StyledModal, StyledModalBody, StyledModalTitle } from './styles'
import { MODAL_TYPES_VERTICAL, MODAL_TYPES_HORIZONTAL } from './types'

export const StyledModalVertical = styled(StyledModal)((props: React.CSSProperties) => ({
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 28px',
  minWidth: '90vw',
  '@media (min-width: 320px)': {
    minWidth: '300px',
  },
  '@media (min-width: 480px)': {
    padding: '40px',
  },
  ...props,
}))

const StyledContent = styled.div((props: React.CSSProperties) => ({
  marginTop: '20px',
  '@media and screen (min-width: 480px)': {
    marginTop: '32px',
  },
  ...props,
}))

const StyledModalVerticalButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  @media (min-width: 480px) {
    justify-content: center;
    flex-direction: row;
    margin-top: 32px;
  }
`

const StyledImage = styled.div`
  display: none;
  @media (min-width: 480px) {
    display: flex;
  }
`

const StyledImageMobile = styled.div`
  display: flex;
  @media (min-width: 480px) {
    display: none;
  }
`

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
  className,
  _responsive = {},
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
    <StyledModalVerticalButton>
      {secondaryButton}
      {primaryButton}
    </StyledModalVerticalButton>
  )

  return (
    <StyledModalVertical
      {...responsive(_responsive)}
      {...showStyles}
      {...childrenStyles}
      className={className}
      {...props}
    >
      {children ? (
        <>
          {withCloseIcon && <CloseIcon onClick={onClose} />}
          {children}
        </>
      ) : (
        <>
          {withCloseIcon && <CloseIcon onClick={onClose} />}
          {image ? (
            image
          ) : (
            <>
              <StyledImage>{MODAL_TYPES_VERTICAL[type]}</StyledImage>
              <StyledImageMobile>{MODAL_TYPES_HORIZONTAL[type]}</StyledImageMobile>
            </>
          )}
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
