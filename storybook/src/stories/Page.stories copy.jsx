import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import App from '../App'


export default {
  title: 'Example/Page',
  component: App
};

const Template = () => <App/>;

export const Landingpage = Template.bind({});

