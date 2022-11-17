
import Icon, { MenuUnfoldOutlined, MenuFoldOutlined, DashboardOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import './NavBar.css'
import { Layout, Menu, Input, Row, Col, Divider, Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;


const SideBar = () => {

    const [collapsed, setState] = useState(false)


    const onCollapse = (collapsed) => {
        setState({ collapsed });
    }
    const toggle = () => {
        setState({
            collapsed: !this.state.collapsed,
        });
    }
    const onSearch = (value) => console.log(value);
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            style={{ backgroundColor: '#0C3F4A', height: "720px" }}
        >
            <div className="logo" >
                {(collapsed) }
            </div>
            <Menu
                style={{ backgroundColor: '#0C3F4A' }}
                defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1"className='menuDashboard' disabled icon={<DashboardOutlined style={{ color: 'white' }} />} >
                    <span>Dashboard</span>
                    <a to="/" />
                </Menu.Item>
                <Menu.Item key="2" >
                    <span>Jobs</span>
                    <a to="/addjob" />
                </Menu.Item>
                <Menu.Item>

                </Menu.Item>
                <Button style={{ backgroundColor: "#EBBE21", marginTop: "350px", justifyContent: "flex-end", postion: "center", marginLeft: "18%" }}>Upgrade Plan</Button>

                <Menu.Divider style={{ color: "#FFFFFF", marginTop: "10%", justifyContent: "flex-end" }}></Menu.Divider>

                <Menu.Item>
                    <h3 style={{ color: "white" }}>© 2022</h3>

                </Menu.Item>
                <span></span>
                <Menu.Item>
                    <h4 style={{ color: "#36C185" }}>About Us | Help | Contact Us</h4>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}
export default SideBar