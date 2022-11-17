import React from "react";
import SideBars from "../component/SideMenus";
import { stories } from "../../.storybook/main";
import { action } from "@storybook/addon-actions";
export default {
    title: 'Idesk/Component/SideBar',
    component: SideBars,
    options: {SideBars: Disabled},

    argTypes: {
      type: {
             
        control: {
          type: 'select'
        }
      },
    
  },
}
const Template = args => <SideBars {...args} />
export const Default = Template.bind({});
export const Disabled= Template.bind({});
Disabled.args={
  Disabled  : true,
}