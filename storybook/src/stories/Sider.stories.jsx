import React from "react";
import SideBar from "../component/NavBar/Sider";
export default {
    title: 'IDesk/Component/SideBar',
    component: SideBar,
    parameters: {
      actions: {
        handles: ['click'],
      },
    },
  };
  const Template = () => <SideBar/>;
  
  export const Headercomponent = Template.bind({});