import React,{useState} from 'react';
// import {default as ProfilePicture } from './assests/ProfilePicture'
import {PageHeader,Header, Col, Row, Divider,Input,Button, Descriptions} from 'antd';
import Icon, {MenuUnfoldOutlined,MenuFoldOutlined,DashboardOutlined,SearchOutlined,BellOutlined} from '@ant-design/icons';
 export default function HeaderBar()  {
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
  this.setState({
      collapsed: !this.state.collapsed,
  });
}
return (
  <>
   <PageHeader style={{backgroundColor:"white" }} >
  <Row >
      <Col span={1} style={{alignItems:'center'}}>
          <div> 
          <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
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
      <Col>
      </Col>
  </Row>


</PageHeader>
</>
 
)
};


