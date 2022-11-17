import React from "react";
import SegmentBar from "../component/Segment";
export default{
    title:"Idesk/Component/Segment",
    component:SegmentBar,
    argTypes:{
        backgroundColor:{control:"color"}
    },
};
const TemplateL=()=> <SegmentBar/>;
export const Segmentcomponent = TemplateL.bind({})