import React from 'react'
import styled from 'styled-components'

export const StyledSearchInput = styled.input((props: React.CSSProperties) => ({
  borderRadius: '12px',
  width: '100%',
  border: '2px solid rgba(96, 100, 139, 1)',
  padding: '12px 30px 12px 30px',
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '24px',
  background: 'transparent',
  boxSizing: 'border-box' as const,
  '&:hover': {
    color: 'white',
  },
  '&:focus': {
    color: 'white',
    outline: 'none',
  },
  '&:focus + svg': {
    color: 'white',
  },
  ...props,
}))

export const SearchIcon = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fill: 'currentcolor',
      position: 'absolute',
      top: '50%',
      left: '20px',
      transform: 'translateY(-50%)',
    }}
  >
    <path
      d="M9.68313 0.278687C4.52844 0.278687 0.349792 4.4577 0.349792 9.61204C0.349792 14.7664 4.52844 18.9454 9.68313 18.9454C11.8259 18.9454 13.857 18.2092 15.4323 16.9959L20.5112 22.1176C20.9669 22.5726 21.7327 22.5726 22.1884 22.1176C22.644 21.6614 22.644 20.8961 22.1884 20.4399L17.0743 15.3532C18.2886 13.7782 19.0165 11.7552 19.0165 9.61204C19.0165 4.4577 14.8378 0.278687 9.68313 0.278687ZM9.68313 2.61203C13.5491 2.61203 16.6831 5.7457 16.6831 9.61204C16.6831 13.4784 13.5491 16.6121 9.68313 16.6121C5.81714 16.6121 2.68313 13.4784 2.68313 9.61204C2.68313 5.7457 5.81714 2.61203 9.68313 2.61203Z"
      fill="currentcolor"
    />
  </svg>
)