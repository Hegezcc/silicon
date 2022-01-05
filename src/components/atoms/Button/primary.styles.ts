export const PRIMARY_STYLES = {
  background: 'linear-gradient(180deg, #5561FF 0%, #3643FC 100%)',
  '&:hover': {
    background: 'linear-gradient(180deg, #6B75FF 0%, #535FFF 100%)',
    cursor: 'pointer',
    boxShadow: '0px 12px 16px 0px #0000004D',
  },
  '&:active': {
    background: 'linear-gradient(180deg, #4B4FA0 0%, #44488B 100%)',
    boxShadow: 'none',
  },
  '&:disabled': {
    background: '#35374f',
    color: 'rgba(255, 255, 255, 0.6)',
    cursor: 'not-allowed',
  },
} as const
