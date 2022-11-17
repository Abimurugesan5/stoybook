import React from "react";
import Demo from "../component/Segmentdefalut";
export default{
    title:"Idesk/Component/Segment",
    component:Demo,
    argTypes:{
        backgroundColor:{control:"color"}
    },
};
const TemplateL=()=> <Demo/>;
export const Segmentdefault = TemplateL.bind({})