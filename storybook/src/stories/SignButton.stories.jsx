import React from 'react';
import { SignButton } from '../component/Button';
import { action } from '@storybook/addon-actions';

export default {
  title:"Idesk/Component/Sign",
  component: SignButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    
  },
};

const Template = (args) => <SignButton {...args} onClick={action('button-click')} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  htmlType:"submit"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  htmlType:"submit"
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
