import { Meta, Story } from '@storybook/react/types-6-0'
import { Spinner } from 'components/atoms/Spinner'
import { SiliconSpinnerProps } from 'types/spinner'
import React from 'react'

export default {
  title: 'silicon/Atoms/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
    color: {
      control: 'color',
    },
    borderWidth: {
      control: 'number',
    },
  },
} as Meta

export const Default: Story<SiliconSpinnerProps> = (args) => <Spinner {...args} />

Default.args = {
  size: 'md',
}
