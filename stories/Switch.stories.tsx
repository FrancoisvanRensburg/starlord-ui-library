import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch, Props } from '../src';

const meta: Meta = {
  title: 'Input/Toggle Switch',
  component: Switch,
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};