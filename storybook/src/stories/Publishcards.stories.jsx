import React from "react";
import Cards from "../component/Pubilshedcard";
export default{
    title: 'IDesk/Component/Card',
  component: Cards,
  argTypes: {
    backgroundColor: { control: 'color' },
    actions: {
        handles: ['click'],
      },
  },
};
const Templatel = ()=> <Cards/>;
export const CardComponents = Templatel.bind({})
CardComponents.args={
    data:[{
        "key":1,
        "department":"Product Management", 
        "role":"Senior Product Manager", 
        "total":10,
        "new_value":0,
        "offered_value":10,
        "location":"Bengaluru",
        "time":"Full Time",
        "status":"Published"
    
    },
]
}