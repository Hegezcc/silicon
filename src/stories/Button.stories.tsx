import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Button } from 'components/atoms/Button'
import { SiliconButtonProps } from 'types/button'
import { abbrStories } from 'utils/abbreviation'

export default {
  title: 'silicon/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'tertiary', 'ghost'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['unset', 'sm', 'md', 'lg', '1/2', 'full'],
      },
    },
    spinnerSize: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    ...abbrStories(),
    bg: {
      control: 'color',
    },
    c: {
      control: 'color',
    },
  },
} as Meta

export const Default: Story<SiliconButtonProps> = (args) => <Button {...args} />

Default.args = {
  variant: 'primary',
  size: 'unset',
  text: 'Button',
}

export const Primary = Default.bind({})
Primary.args = {
  variant: 'primary',
  size: 'unset',
  text: 'Primary',
}

export const Secondary = Default.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'unset',
  text: 'Secondary',
}

export const Tertiary = Default.bind({})
Tertiary.args = {
  variant: 'tertiary',
  size: 'unset',
  text: 'Tertiary',
}

export const Ghost = Default.bind({})
Ghost.args = {
  variant: 'ghost',
  size: 'unset',
  text: 'Ghost',
}
