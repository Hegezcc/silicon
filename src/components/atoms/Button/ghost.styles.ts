export const GHOST_STYLES = {
  border: '2px solid #60648B',
  background: '#323347',
  '&:hover': {
    border: '2px solid #B9BCD9',
    cursor: 'pointer',
  },
  '&:active': { border: '2px solid #45475A', boxShadow: 'none' },
  '&:disabled': {
    border: '2px solid #6E719833',
    color: '#6E7198',
    cursor: 'not-allowed',
  },
} as const
