import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { SearchInput } from '../../components/atoms/Input/SearchInput'

export default {
  title: 'silicon/Atoms/Input/SearchInput',
  component: SearchInput,
  argTypes: {
    inputSize: {
      control: {
        type: 'radio',
        options: ['unset', 'sm', 'md', 'lg', '1/2', 'full'],
      },
    },
    withIcon: {
      control: 'boolean',
    },
    center: {
      control: 'boolean',
    },
  },
} as Meta

export const Default: Story<any> = (args) => <SearchInput {...args} />

Default.args = {
  withIcon: true,
  center: true,
  textAlign: 'end',
}
