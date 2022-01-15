export const DEFAULT_SIZE = {
  width: '392px',
  height: '48px',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '0px 0px 0px 0px',
}

export const SEARCH_INPUT_SIZE = {
  unset: {
    ...DEFAULT_SIZE,
    width: 'auto',
    height: 'auto',
  },
  sm: {
    ...DEFAULT_SIZE,
    width: '300px',
    height: '44px',
    fontSize: '12px',
  },
  md: {
    ...DEFAULT_SIZE,
  },
  lg: {
    width: '450px',
    height: '52px',
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
} as const
