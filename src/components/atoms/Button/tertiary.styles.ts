export const TERTIARY_STYLES = {
  background: '#28293d',
  color: '#fff',
  textDecoration: 'underline',
  '&:hover': {
    background: '#323347',
    boxShadow: '0px 12px 16px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
  },
  '&:active': {
    background: '#242537',
    boxShadow: 'none',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    boxShadow: 'none',
    background: '#28293d',
    color: 'rgba(255, 255, 255, 0.6)',
  },
} as const;
