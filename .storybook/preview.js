export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  background: {
    default: 'silicon',
    values: [{ name: 'silicon', value: '#28293d' }],
  },
};
