import { createGlobalStyle } from 'styled-components'
import './styles.css'
import React from 'react'

export const GlobalStylesConfig = createGlobalStyle({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  html: {
    scrollBehavior: 'smooth',
  },
  'html, body': {
    height: '100%',
    width: '100%',
    backgroundColor: '#28293D',
  },
  body: {
    fontFamily: 'Inter, sans-serif',
  },
  button: {
    cursor: 'pointer',
  },
})

export const GlobalStyles = () => <GlobalStylesConfig />
