import React from 'react';

import  NavBar from '../component/NavBar/NavBar';

export default {
  title: 'IDesk/Component/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
const Template = () => <NavBar/>;
export const Navcomponent = Template.bind({});


