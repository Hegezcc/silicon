export const DEFAULT_SIZE = {
  padding: '12px 32px',
  width: '116px',
  height: '48px',
  fontSize: '16px',
};

export const BUTTON_SIZES = {
  unset: {
    ...DEFAULT_SIZE,
    width: 'auto',
    height: 'auto',
  },
  sm: {
    ...DEFAULT_SIZE,
    width: '80px',
    height: '40px',
    fontSize: '12px',
  },
  md: {
    ...DEFAULT_SIZE,
  },
  lg: {
    padding: '16px 40px',
    width: '160px',
    height: '48px',
    fontSize: '16px',
  },
  '1/2': {
    ...DEFAULT_SIZE,
    width: '50%',
  },
  full: {
    ...DEFAULT_SIZE,
    width: '100%',
  },
} as const;
