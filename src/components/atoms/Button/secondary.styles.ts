export const SECONDARY_STYLES = {
  background: '#3d3e50',
  '&:hover': {
    cursor: 'pointer',
    boxShadow: '0px 12px 16px 0px rgba(0, 0, 0, 0.3)',
  },
  '&:disabled': {
    background: '#35374f',
    color: 'rgba(255, 255, 255, 0.6)',
    cursor: 'not-allowed',
  },
  '&:active': {
    boxShadow: 'none',
  },
} as const
