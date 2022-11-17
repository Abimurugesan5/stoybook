import React,{useState} from "react";
import {Picture}from "./Picture.png"
import { Layout, Menu ,Input, Row ,Col, Divider,Button,PageHeader} from 'antd';
import Icon, {MenuUnfoldOutlined,MenuFoldOutlined,DashboardOutlined,SearchOutlined,BellOutlined} from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
export default function Headers() {
    const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const suffix = (
    <SearchOutlined
      style={{
          color:'gray'
      }}
    />
  );
  const toggle = () => {
   this. setState({
        collapsed: !collapsed,
    });
  }
    return(
        <>
         <PageHeader style={{backgroundColor:"white" }} >
            <Row >
            <Col span={1} style={{alignItems:'center'}}>
            <div> 
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            onClick: (toggleCollapsed) ,
                            className:"trigger"
                            })}

            </div>
                    </Col>
                    <Col >
                    <Divider  type="vertical" className='datavalue'/>

                    </Col>
                    <Col span={20}>
                    <Input
                        placeholder="Search a job or candidate or interviewer"
                        bordered={false}
                        prefix={suffix}
                        style={{alignItems:'center',width:"100%"}}

                        />
                        
                    </Col>
                    <Col span={1}>
                    <Icon component={BellOutlined} />
                    </Col>
                    <Col span={1}>
                    <div className="logo" >
            </div>
                    </Col>
                </Row>
          
            
            </PageHeader>
        </>
    )
}