import React from "react";
import LeftMenu from "../component/NavBar/Section/LeftMenu";
export default{
    title:"Idesk/Component/LeftMenu",
    component:LeftMenu,
    argTypes:{
        backgroundColor:{control:"color"}
    },
};
const TemplateL=()=> <LeftMenu/>;
export const PlainFormcomponent = TemplateL.bind({})