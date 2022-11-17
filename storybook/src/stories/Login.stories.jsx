import { useForm } from 'react-hook-form';
import FormField from '../component/Login';

export default {
  title: 'Idesk/Component/FormField',
  component: FormField,
  argTypes: {
    type: {
      options: ['text', 'email', 'password', 'file', 'checkbox'],
      control: {
        type: 'select'
      }
    }
  }
};

const Template = (args) => {
  const { register } = useForm();

  return <FormField {...args} register={register} />;
};

export const Text = Template.bind({});
export const Email = Template.bind({});
export const Password = Template.bind({});
export const File = Template.bind({});
export const Checkboxes = Template.bind({});
Text.args = {
  type: 'text',
  label: 'Text Field',
  name: 'text-field',
  errorMsg: 'Text field is required',
  placeholder: 'Text goes here'
};


Email.args = {
  type: 'email',
  name: 'email',
  label: 'Email',
  placeholder: 'john.doe@email.com'
};

Password.args = {
  type: 'password',
  name: 'password',
  label: 'Password',
  placeholder: '********'
};


File.args = {
  type: 'file',
  name: 'file-upload',
  label: 'File upload'
};


Checkboxes.args = {
  type: 'checkbox',
  name: 'check-1',
  label: 'Checkboxes'
};