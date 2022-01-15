import { GlobalStyles } from '../src/config/global.styles'
import { addDecorator } from '@storybook/react'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
