import React, { FC } from 'react'
import styled from 'styled-components'
import { SiliconModalProps } from 'types/modal'
import { StyledCloseIcon, StyledModal, StyledModalBody, StyledModalTitle } from './styles'
import { MODAL_TYPES_HORIZONTAL } from './types'

export const StyledModalHorizontal = styled(StyledModal)((props: React.CSSProperties) => ({
  display: 'block',
  maxWidth: '592px',
  ...props,
}))

export const StyledIconWrapper = styled.div`
  margin-right: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const CloseIcon: FC<{ onClick?: () => unknown }> = ({ onClick }) => (
  <StyledCloseIcon onClick={onClick}>
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.16185 3.75537C3.9486 3.75537 3.7256 3.82704 3.56285 3.98954C3.23743 4.31538 3.23743 4.86203 3.56285 5.18787L8.79727 10.422L3.56285 15.6562C3.23743 15.982 3.23743 16.5287 3.56285 16.8545C3.88835 17.1795 4.43535 17.1795 4.76085 16.8545L9.99518 11.6204L15.2295 16.8545C15.555 17.1795 16.102 17.1795 16.4275 16.8545C16.7529 16.5287 16.7529 15.982 16.4275 15.6562L11.1931 10.422L16.4275 5.18787C16.7529 4.86203 16.7529 4.31538 16.4275 3.98954C16.2648 3.82704 16.0417 3.75537 15.8285 3.75537C15.6153 3.75537 15.3924 3.82704 15.2295 3.98954L9.99518 9.2237L4.76085 3.98954C4.5981 3.82704 4.3751 3.75537 4.16185 3.75537Z"
        fill="white"
      />
    </svg>
  </StyledCloseIcon>
)

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 12px;
`
export const StyledContent = styled.div``

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 32px;
`

export const ModalHorizontal: FC<Omit<SiliconModalProps, 'children'>> = ({
  image,
  title,
  body,
  type = 'success',
  withCloseIcon = true,
  onClose,
  primaryButton,
  secondaryButton,
  ...props
}) => {
  const stylesTitle = {
    fontSize: '24px',
    marginBottom: 0,
    textAlign: 'left',
    width: '100%',
  }
  const stylesBody = { textAlign: 'left' }

  let hasButton = false
  if (primaryButton || secondaryButton) {
    hasButton = true
  }

  let widthButtonWrapper = 116
  if (primaryButton && secondaryButton) {
    widthButtonWrapper *= 2
  }

  const buttonElement = (
    <StyledButtonWrapper>
      <div style={{ width: widthButtonWrapper + 'px', display: 'flex' }}>
        {secondaryButton}
        {primaryButton}
      </div>
    </StyledButtonWrapper>
  )

  return (
    <StyledModalHorizontal {...props}>
      <div style={{ display: 'flex' }}>
        <StyledIconWrapper>{image ? image : MODAL_TYPES_HORIZONTAL[type]}</StyledIconWrapper>
        <div>
          <>
            <StyledHead>
              {title && <StyledModalTitle {...stylesTitle}>{title}</StyledModalTitle>}
              {withCloseIcon && <CloseIcon onClick={onClose} />}
            </StyledHead>
            {body && <StyledModalBody {...stylesBody}>{body}</StyledModalBody>}
          </>
        </div>
      </div>
      {hasButton && buttonElement}
    </StyledModalHorizontal>
  )
}
