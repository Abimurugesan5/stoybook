import React from "react";
import  TableAnd  from "../component/Table";
export default {title:"IDesk/Component/Tables",component:TableAnd, parameters: {
    actions: {
      handles: ['click'],
    },
  },}
  const Template = (args) => <TableAnd {...args} />;
  export const Cardcomponent = Template.bind({});