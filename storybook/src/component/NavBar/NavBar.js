import React, { Component } from 'react';
import '../NavBar/NavBar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu ,Input, Row ,Col, Divider,Button} from 'antd';
import Icon, {MenuUnfoldOutlined,MenuFoldOutlined,DashboardOutlined,SearchOutlined,BellOutlined} from '@ant-design/icons';
import Landingpage from '../Landingpage';
import PlainForm from '../PlainForm/PlainForm';
import FormField from '../Login';



const { Header, Content, Sider } = Layout;

class NavBar  extends Component {
  state = {
    collapsed: false,
};

onCollapse = (collapsed) => {
    this.setState({ collapsed });
}
toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
}
onSearch = (value) => console.log(value);

render(){
    const suffix = (
        <SearchOutlined
          style={{
              color:'gray'
          }}
        />
      );
  return (
    <Router>
    <Layout >

        <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{backgroundColor:'#0C3F4A',height:"720px"}}
            >
            <div className="logo" >
            {(this.state.collapsed)}
            </div>
            <Menu          
                        style={{backgroundColor:'#0C3F4A'}}
                        defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<DashboardOutlined style={{color:'white'}} />} >
                    <span>Dashboard</span>
                    <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2" >
                    <span>Jobs</span>
                    <Link to="/addjob" />
                </Menu.Item>
               <Menu.Item>

               </Menu.Item>
         <Button style={{backgroundColor:"#EBBE21",marginTop:"350px",justifyContent:"flex-end",postion:"center",marginLeft:"18%"}}>Upgrade Plan</Button>

           <Menu.Divider style={{color:"#FFFFFF",marginTop:"10%",justifyContent:"flex-end"}}></Menu.Divider>

            <Menu.Item>
           <h3 style={{color:"white"}}>© 2022</h3>
            
           </Menu.Item>
           <span></span>
            <Menu.Item>
            <h4 style={{color:"#36C185"}}>About Us | Help | Contact Us</h4>
            </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{backgroundColor:"white" }} >
                <Row >
                    <Col span={1} style={{alignItems:'center'}}>
                        <div> 
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            onClick: () => this.toggle(!this.state.collapsed),
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
                </Row>
          
            
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24,positon:"fixed",overflowY:'scroll' }}>
                <Route exact path='/' component={FormField}/>
                {/* <Route exact path="/" component={Landingpage} /> */}
                <Route path="/addjob" component={PlainForm} />
            </Content>
      
        </Layout>

    </Layout>
   </Router>
  );
}
}
export default NavBar
