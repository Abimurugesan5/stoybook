import React from "react";
import PlainForm from "../component/PlainForm/PlainForm";
export default{
    title:"Idesk/Component/PlainForm",
    component:PlainForm,
    argTypes:{
        backgroundColor:{control:"color"}
    },
};
const TemplateL=()=> <PlainForm/>;
export const PlainFormcomponent = TemplateL.bind({})