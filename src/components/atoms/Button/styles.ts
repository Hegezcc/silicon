import React from 'react';
import styled from 'styled-components';
import { GHOST_STYLES } from './ghost.styles';
import { PRIMARY_STYLES } from './primary.styles';
import { SECONDARY_STYLES } from './secondary.styles';
import { TERTIARY_STYLES } from './tertiary.styles';

export const VARIANT_STYLES = {
  primary: PRIMARY_STYLES,
  secondary: SECONDARY_STYLES,
  tertiary: TERTIARY_STYLES,
  ghost: GHOST_STYLES,
};

export const StyledButton = styled.button((props: React.CSSProperties) => ({
  color: '#fff',
  padding: '12px 32px',
  borderRadius: '12px',
  outline: 'none',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  transition: 'all 0.15s ease-out',
  boxSizing: 'border-box' as const,
  position: 'relative' as const,
  ...props,
}));
