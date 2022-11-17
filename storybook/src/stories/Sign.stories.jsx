import React from "react";
import Sign from "../component/Sign";
import { stories } from "../../.storybook/main";
import { action } from "@storybook/addon-actions";
export default{
    title:"Idesk/Component/Sign",
    component:Sign,
    argTypes: {
        type: {
          options: ['text', 'email', 'password', 'file', 'checkbox'],
          control: {
            type: 'select'
          }
        }
      }
};
const Template =args => <Sign {...args}/>
export const Text = Template.bind({});
Text.args = {
    type: 'email',
    label: 'Text Field',
    name: 'text-field',
    errorMsg: 'Text field is required',
    placeholder: 'Text goes here'
  };
  export const Email = Template.bind({});
Email.args = {
  type: 'password',
  name: 'email',
  label: 'Email',
  placeholder: 'john.doe@email.com'
};
  