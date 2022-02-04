import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Button } from 'components/atoms/Button'
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: Story<any> = (args) => <Button {...args} />

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

export const Small = Default.bind({})
Small.args = {
  variant: 'primary',
  size: 'sm',
  text: 'Small',
}

export const Medium = Default.bind({})
Medium.args = {
  variant: 'primary',
  size: 'md',
  text: 'Medium',
}

export const Large = Default.bind({})
Large.args = {
  variant: 'primary',
  size: 'lg',
  text: 'Large',
}

export const Half = Default.bind({})
Half.args = {
  variant: 'primary',
  size: '1/2',
  text: 'Half',
}

export const Full = Default.bind({})
Full.args = {
  variant: 'primary',
  size: 'full',
  text: 'Full',
}

export const LeftIcon = Default.bind({})
LeftIcon.args = {
  variant: 'primary',
  text: 'Button',
  leftIcon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.4753 11.29L14.8953 6.70001L16.3053 5.29001L22.3053 11.29L18.7153 14.88L17.3053 13.46L19.4753 11.29ZM1.69531 3.51001L5.88531 7.70001L2.30531 11.29L8.30531 17.29L9.71531 15.88L5.13531 11.29L7.30531 9.12001L20.0853 21.9L21.4953 20.49L3.11531 2.10001L1.69531 3.51001Z"
        fill="white"
      />
    </svg>
  ),
}

export const MidIcon = Default.bind({})
MidIcon.args = {
  variant: 'primary',
  midIcon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.4753 11.29L14.8953 6.70001L16.3053 5.29001L22.3053 11.29L18.7153 14.88L17.3053 13.46L19.4753 11.29ZM1.69531 3.51001L5.88531 7.70001L2.30531 11.29L8.30531 17.29L9.71531 15.88L5.13531 11.29L7.30531 9.12001L20.0853 21.9L21.4953 20.49L3.11531 2.10001L1.69531 3.51001Z"
        fill="white"
      />
    </svg>
  ),
}
export const RightIcon = Default.bind({})
RightIcon.args = {
  variant: 'primary',
  text: 'Button',
  rightIcon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.4753 11.29L14.8953 6.70001L16.3053 5.29001L22.3053 11.29L18.7153 14.88L17.3053 13.46L19.4753 11.29ZM1.69531 3.51001L5.88531 7.70001L2.30531 11.29L8.30531 17.29L9.71531 15.88L5.13531 11.29L7.30531 9.12001L20.0853 21.9L21.4953 20.49L3.11531 2.10001L1.69531 3.51001Z"
        fill="white"
      />
    </svg>
  ),
}
