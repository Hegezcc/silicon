import React, { FC, CSSProperties } from 'react'
import styled from 'styled-components'

export const StyledModal = styled.div(() => ({
  borderRadius: '24px',
  padding: '40px',
  backgroundColor: '#373951',
  minWidth: '300px',
  maxWidth: '392px',
  zIndex: 999999,
  position: 'fixed' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}))

export const StyledModalTitle = styled.h2((props: CSSProperties) => ({
  color: '#FFFFFF',
  fontFamily: 'r-flex',
  fontWeight: 700,
  marginBottom: '12px',
  textAlign: 'center' as const,
  overflowWrap: 'break-word' as const,
  breakWrap: 'break-word' as const,
  fontSize: '32px',
  maxWidth: '312px',
  ...props,
}))

export const StyledCloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
`

export const StyledModalBody = styled.p((props: CSSProperties) => ({
  color: 'rgba(255, 255, 255, 0.6)',
  fontFamily: 'Inter, sans-serif',
  textAlign: 'center' as const,
  overflowWrap: 'break-word' as const,
  breakWrap: 'break-word' as const,
  maxWidth: '312px',
  ...props,
}))

export const StyledModalButton = styled.p((props: CSSProperties) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '32px',
  ...props,
}))

export const StyledModalOverlay = styled.div((props: CSSProperties) => ({
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 999998,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  ...props,
}))

export const CloseIcon: FC<{ onClick?: () => unknown }> = ({ onClick }) => (
  <StyledCloseIcon onClick={onClick}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.99422 3.90625C4.73832 3.90625 4.47072 3.99226 4.27542 4.18726C3.88492 4.57826 3.88492 5.23424 4.27542 5.62524L10.5567 11.9062L4.27542 18.1873C3.88492 18.5783 3.88492 19.2342 4.27542 19.6252C4.66602 20.0152 5.32242 20.0152 5.71302 19.6252L11.9942 13.3443L18.2754 19.6252C18.666 20.0152 19.3224 20.0152 19.713 19.6252C20.1035 19.2342 20.1035 18.5783 19.713 18.1873L13.4317 11.9062L19.713 5.62524C20.1035 5.23424 20.1035 4.57826 19.713 4.18726C19.5177 3.99226 19.25 3.90625 18.9942 3.90625C18.7383 3.90625 18.4708 3.99226 18.2754 4.18726L11.9942 10.4682L5.71302 4.18726C5.51772 3.99226 5.25012 3.90625 4.99422 3.90625Z"
        fill="white"
      />
    </svg>
  </StyledCloseIcon>
)
