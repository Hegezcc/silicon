import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { SearchInput } from '../../components/atoms/Input/SearchInput'
import { SiliconSearchInput } from '../../types/Input/SearchInput'

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

export const Default: Story<SiliconSearchInput> = (args) => (
  <div
    style={{
      width: '1000px',
      height: '400px',
      backgroundColor: 'rgba(40,41,61,1)',
      padding: '50px',
    }}
  >
    <SearchInput {...args} ref={null} />
  </div>
) //background

Default.args = {
  withIcon: true,
  center: true,
  h: 50,
  w: 400,
  inputSize: 'unset',
}
