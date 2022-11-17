import React from "react";
import { Segmented } from "antd";
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
const Demo=()=>{
    return(
        <>
        <Segmented
     style={{backgroundColor:"white",width:"Hug (177px)"}}
     options={[
      {
        label: 'Name',
        value: 'Name',
        icon: <BarsOutlined />,
      },
     
    ]}
  />
  <br></br>

  <Segmented
     style={{backgroundColor:"#F3F3F3",width:"Hug (177px)",top:"100px"}}
     options={[
      {
        label: 'Name',
        value: 'Name',
        icon: <BarsOutlined />,
      },
     
    ]}
  />
    </>
    )
}
export default Demo