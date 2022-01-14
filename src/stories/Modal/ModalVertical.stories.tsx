import { Meta, Story } from '@storybook/react/types-6-0'
import { Modal } from 'components/molecules/Modal'
import { Button } from 'components/atoms/Button'

import React from 'react'

export default {
  title: 'silicon/Molecules/Modal/Vertical',
  component: Modal,
  argTypes: {
    title: {
      control: 'text',
    },
    body: {
      control: 'text',
    },
    withOverlay: {
      control: 'boolean',
    },
    type: {
      control: {
        type: 'radio',
        options: ['success', 'warning', 'danger'],
      },
    },
  },
} as Meta

export const Default: Story<any> = (args) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Modal
        {...args}
        show={open}
        onClose={() => setOpen(false)}
        title="Modal Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui orci ac egestas."
      />
      <Button onClick={() => setOpen(true)} text="OPEN" />
    </>
  )
}

export const OneButton = Default.bind({})
OneButton.args = {
  primaryButton: <Button text="OK" size="full" />,
}

export const TwoButtons = Default.bind({})
TwoButtons.args = {
  primaryButton: (
    <Button text="OK" mt="8px" size="full" _responsive={{ xsm: { mt: 0, w: '50%', ml: '8px' } }} />
  ),
  secondaryButton: (
    <Button
      variant="secondary"
      text="Cancel"
      size="full"
      _responsive={{ xsm: { mt: 0, w: '50%' } }}
    />
  ),
}
