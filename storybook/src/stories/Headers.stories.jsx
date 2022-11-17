import React from "react";
import Headers from "../component/Headers";
export default{
    title:"Idesk/Component/HeaderBar",
    component:Headers,
    argTypes:{
        backgroundColor:{control:"color"}
    },
};
const Template=()=> <Headers/>;
export const HeaderFormcomponent = Template.bind({})