import React from 'react';

import HeaderBar from '../component/HeaderBar';

export default {
  title: 'IDesk/Component/HeaderBar',
  component: HeaderBar,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};
const Template = () => <HeaderBar/>;

export const Headercomponent = Template.bind({});


