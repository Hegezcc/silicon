const defaultLoadingStyles = {
  cursor: 'not-allowed',
  boxShadow: 'none',
  pointerEvents: 'none',
}

export const LOADING_STYLES = {
  primary: {
    background: '#4B4FA0',
    ...defaultLoadingStyles,
  },
  secondary: {
    background: '#3d3e50',
    ...defaultLoadingStyles,
  },
  tertiary: {
    background: '#242537',
    ...defaultLoadingStyles,
  },
  ghost: {
    background: '#28293d',
    border: '2px solid #4F5275',
    ...defaultLoadingStyles,
  },
}
